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
@Component({
  selector: 'app-select-from-multiplechar',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './select-from-multiplechar.component.html',
  styleUrl: './select-from-multiplechar.component.scss',
})
export class SelectFromMultiplecharComponent {
  message: string = '';
  charObj: Character = new Character();
  data1: string = '';
  constructor(
    private router: Router,
    private llamaservice: LlamaChatApiService,
    private sharedService: SharedService
  ) {}
  onCustomize(data: string) {
    this.data1 = data;
    this.sharedService.changeAnime( this.data1);
    this.llamaservice.createAnime( this.data1, this.data1).subscribe(
      (response) => {
        this.message = response.message;
        console.log(this.message);
      },
      (error) => {
        console.error('Error creating user:', error);
        this.message = 'An error occurred while creating the user.';
      }
    );
    this.router.navigateByUrl('/selectVisuals');
  }

  onChat(data: string) {
    this.data1 = data;
    this.sharedService.changeAnime( this.data1);
    this.llamaservice.createAnime( this.data1, this.data1).subscribe(
      (response) => {
        this.message = response.message;
        console.log(this.message);
      },
      (error) => {
        console.error('Error creating user:', error);
        this.message = 'An error occurred while creating the user.';
      }
    );
    this.router.navigateByUrl('/chatpage');
  }

  character = [
    {

      name: 'Shijuka,24',
      image: '../assets/anime/character_1/posed_image_3.png',
      Desc: '  Shizuka is a smart and kind neighbourhood girl. She is, unlike Nobita, a quick-witted and very studious child. Shizuka loves to bathe and does it several times.',
    },
    {
      name: 'Ania, 30',
      image: '../assets/anime/character_1/ComfyUI_00082_.png',
      Desc: '  Ania is a smart and kind neighbourhood girl. She is, unlike Nobita, a quick-witted and very studious child. Shizuka loves to bathe and does it several times.',
    },
    {
      name: 'Shivoka, 22',
      image: '../assets/anime/character_1/ComfyUI_00080_.png',
      Desc: '  Ania is a smart and kind neighbourhood girl. She is, unlike Nobita, a quick-witted and very studious child. Shizuka loves to bathe and does it several times.',
    },
    {
      name: 'Shivoka, 22',
      image: '../assets/anime/character_1/ComfyUI_00080_.png',
      Desc: '  Ania is a smart and kind neighbourhood girl. She is, unlike Nobita, a quick-witted and very studious child. Shizuka loves to bathe and does it several times.',
    },
    {
      name: 'Shivoka, 22',
      image: '../assets/anime/character_1/ComfyUI_00080_.png',
      Desc: '  Ania is a smart and kind neighbourhood girl. She is, unlike Nobita, a quick-witted and very studious child. Shizuka loves to bathe and does it several times.',
    },
    {
      name: 'Shivoka, 22',
      image: '../assets/anime/character_1/ComfyUI_00080_.png',
      Desc: '  Ania is a smart and kind neighbourhood girl. She is, unlike Nobita, a quick-witted and very studious child. Shizuka loves to bathe and does it several times.',
    },
  ];
}
export class Character {
  name: string;
  image: string;
  Desc: string;

  constructor() {
    this.name = '';
    this.image = '';
    this.Desc = '';
  }
}
