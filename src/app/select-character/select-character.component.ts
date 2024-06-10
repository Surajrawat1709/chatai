import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-select-character',
  standalone: true,
  imports: [MatButtonModule,MatCardModule],
  templateUrl: './select-character.component.html',
  styleUrl: './select-character.component.scss'
})
export class SelectCharacterComponent {

}
