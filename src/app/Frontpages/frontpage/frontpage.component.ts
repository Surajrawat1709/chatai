import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-frontpage',
  standalone: true,
  imports: [],
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.scss'
})
export class FrontpageComponent {
    rawjt1a: string = ' '
    rawfpk4: string = ' '
    raw28rp: string = ' '
    rawq7kn: string = ' '
    rawym5a: string = ' '
    rawf7pk: string = ' '
    constructor(private title: Title, private meta: Meta) {
      this.title.setTitle('Up Start Template')
      this.meta.addTags([
        {
          property: 'og:title',
          content: 'Up Start Template',
        },
      ])
    }
  }
