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

}
