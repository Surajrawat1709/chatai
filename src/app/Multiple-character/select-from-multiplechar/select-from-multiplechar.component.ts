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
  constructor(private router: Router,private llamaservice: LlamaChatApiService) {}
  onLogin() {
    this.llamaservice.createAnime("Suraj", "Martin").subscribe((response) => {
      this.message = response.message;
      console.log(this.message)
    }, error => {
      console.error('Error creating user:', error);
      this.message = 'An error occurred while creating the user.';
    });
    this.router.navigateByUrl('/selectVisuals');
  }
  character = [
    { name: "Martin", image: "../assets/anime/character_1/img2.jpeg", Desc:"  Martin is a handsome boy of age 24. Working as a fashion model, he is ready to talk to you. Select Cht now and go chat with him.  Martin is a handsome boy of age 24. Working as a fashion model, he is ready to talk to you. Select Cht now and go chat with him." },
    { name: "Ani", image: "../assets/anime/character_1/img2.jpeg" ,Desc:"  Martin is a handsome boy of age 24. Working as a fashion model, he is ready to talk to you. Select Cht now and go chat with him.  Martin is a handsome boy of age 24. Working as a fashion model, he is ready to talk to you. Select Cht now and go chat with him." },
    { name: "Shivoka", image: "../assets/anime/character_1/img2.jpeg",Desc:"  Martin is a handsome boy of age 24. Working as a fashion model, he is ready to talk to you. Select Cht now and go chat with him.  Martin is a handsome boy of age 24. Working as a fashion model, he is ready to talk to you. Select Cht now and go chat with him." },
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
