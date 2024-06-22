import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { LLamaAIResponse } from './utility/constants';


@Injectable({
  providedIn: 'root'
})
export class LlamaChatApiService {
  //api_url: string = "https://d4921aba83ca14922acdd5d6fa7e04a80.clg07azjl.paperspacegradient.com/"
  api_url: string = "http://localhost:4200/api"
  constructor(private http: HttpClient) { }

  getInitResponse(){
    return this.http.get(this.api_url)
  }

  private url_for_msg = this.api_url + "/api/predict"
  QueryPrompt(prompt: string){
    return this.http.post(this.url_for_msg, { message: prompt})
  }

  private url_for_login=this.api_url+"/api/login/";
  createUser(username: string, user: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.url_for_login}?username=${username}`, {name:user}, { headers });
  }

   private url_for_anime=this.api_url+"/api/select_anime/";
   createAnime(animename: string, anime: any): Observable<any> {

    return this.http.post<any>(`${this.url_for_anime}?animename=${animename}`, {name:"Suraj",characteristics:"anime"});
  }


  private url_for_chat=this.api_url + "/api/initchat";
  createChat(username: string, animename: string,scenario: string): Observable<any>{
    return this.http.get<any>(`${this.url_for_chat}?username=${username}&animename=${animename}&scenario=${scenario}`);
  }
    }

