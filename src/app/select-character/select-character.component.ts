import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-select-character',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,RouterOutlet,RouterModule],
  templateUrl: './select-character.component.html',
  styleUrl: './select-character.component.scss'
})
export class SelectCharacterComponent {
  constructor(private router: Router){}
  onLogin() {

        this.router.navigateByUrl('/chatpage');

    }
  }

