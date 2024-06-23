import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { LlamaChatApiService } from '../../llama-chat-api.service';
import { SharedService } from '../../shared.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-select-character',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    RouterOutlet,
    RouterModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './select-character.component.html',
  styleUrl: './select-character.component.scss',
})
export class SelectCharacterComponent {
  message: string = '';
  data1: string = '';
 animeData:string ='';
 msg: string = '';
 selectedOption: string = '';
  constructor(
    private router: Router,
    private llamaservice: LlamaChatApiService,private sharedService: SharedService
  ) {}


  ngOnInit() {
    this.sharedService.currentData.subscribe(data1 => this.data1 = data1);
    this.sharedService.currentAnimeData.subscribe(animeData => this.animeData = animeData);
  }

  onChat(data: string) {
    this.msg = data;
    this.llamaservice.createChat(this.data1, this.animeData, this.msg).subscribe(
      (response) => {
        this.message = response.response;
        console.log(this.message);
        console.log(this.msg);
        console.log(this.data1);
        console.log(this.animeData);
      },
      (error) => {
        console.error('Error creating user:', error);
        this.message = 'An error occurred while creating the user.';
      }
    );
    this.router.navigateByUrl('/chatpage');
  }
  favoriteView: string | undefined;
  view: string[] = ['Front', 'Back', 'Side', 'Closeup'];

  favouriteAction: string | undefined;
  action: string[] = ['Standing', 'Sitting', 'Dancing', 'Swimming'];

  favoriteClothing: string | undefined;
  clothing: string[] = ['Casual', 'Formal', 'Jeans', 'Nurse'];

  images = {
    option1:'/assets/anime/character_1/ComfyUI_00080_.png',
    option2:  '/assets/anime/character_1/posed_image_1.png',
    option3: '/assets/anime/character_1/ComfyUI_00082_.png',
     option4: '/assets/anime/character_1/posed_image_2.png'
  };
}
