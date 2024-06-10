import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../../utility/constants';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
@Component({
  selector: 'app-message-panel',
  standalone: true,
  imports: [CommonModule,ImageSliderComponent],
  templateUrl: './message-panel.component.html',
  styleUrl: './message-panel.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MessagePanelComponent{
  @ViewChild('scrollframe', { static: true })
  scrollFrame!: ElementRef;

  @ViewChild('audio', { static: true })
  audio!: ElementRef;

  @ViewChild('audioToggle', { static: true })
  audioToggle!: ElementRef;

  private scrollContainer: any;

  private _messages: Message[] = [];

  userPath = "../../assets/user-path.png"
  avatarPath = "../../assets/bot-path.png"

  @Input()
  loading!: boolean;

  toggle = false

  @Input() set messages(data: Message[]) {
    this.updateData(data).then(() => {
      if(data.length){
        this.scrollToBottom();

        if(this.toggle){
          this.audio.nativeElement.play();
        }
        else{
          this.audioToggle.nativeElement.play();
        }
        this.toggle = !this.toggle;
      }
    })
  }

  get messages(): Message[] {
    return this._messages;
  }

  updateData(data: Message[]){
    return new Promise((resolve)=> {
      this._messages = [...data];
      resolve(true);
    })
  }

  ngAfterViewInit() {
    this.scrollContainer = this.scrollFrame.nativeElement;
  }

  public scrollToBottom(): void {
    if(this.scrollContainer){
      this.scrollContainer.scroll({
        top: this.scrollContainer.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
  slides: any[] = [
    {

      url: '../assets/anime/character_1/posed_image_1.png',
      title: 'First slide',
      description: 'This is the first slide',
    },
    {
      url: '/assets/anime/character_1/posed_image_2.png',
      title: 'Second slide',
      description: 'This is the second slide',
    },
    {
      url: '/assets/anime/character_1/posed_image_3.png',
      title: 'Third slide',
      description: 'This is the third slide',
    },
    {

      url: '/assets/anime/character_2/posed_image_1 (2).png',
      title: 'Fourth slide',
      description: 'This is the fourth slide',
    },
    {
      url: '/assets/anime/character_2/posed_image_2 (2).png',
      title: 'Fifth slide',
      description: 'This is the fifth slide',
    },
  ];
}
