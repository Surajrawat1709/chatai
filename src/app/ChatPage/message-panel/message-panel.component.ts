import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../../utility/constants';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../api.service';
@Component({
  selector: 'app-message-panel',
  standalone: true,
  imports: [CommonModule, ImageSliderComponent, MatButtonModule, MatCardModule,HttpClientModule,FormsModule,ReactiveFormsModule],
  templateUrl: './message-panel.component.html',
  styleUrl: './message-panel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MessagePanelComponent implements OnInit {
  @ViewChild('scrollframe', { static: true })
  scrollFrame!: ElementRef;

  @ViewChild('audio', { static: true })
  audio!: ElementRef;

  @ViewChild('audioToggle', { static: true })
  audioToggle!: ElementRef;

  private scrollContainer: any;

  private _messages: Message[] = [];

  userPath = '../../assets/user-path.jpeg';
  avatarPath = '../../assets/bot-path.png';

  @Input()
  loading!: boolean;

  toggle = false;

  @Input() set messages(data: Message[]) {
    this.updateData(data).then(() => {
      if (data.length) {
        this.scrollToBottom();

        if (this.toggle) {
          this.audio.nativeElement.play();
        } else {
          this.audioToggle.nativeElement.play();
        }
        this.toggle = !this.toggle;
      }
    });
  }

  get messages(): Message[] {
    return this._messages;
  }

  updateData(data: Message[]) {
    return new Promise((resolve) => {
      this._messages = [...data];
      resolve(true);
    });
  }

  ngAfterViewInit() {
    this.scrollContainer = this.scrollFrame.nativeElement;
  }

  public scrollToBottom(): void {
    if (this.scrollContainer) {
      this.scrollContainer.scroll({
        top: this.scrollContainer.scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    }
  }

  messageq!: string;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMessage().subscribe(
      response => {
        this.messageq = response.msg;
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }

  slides: any[] = [
    {
     // url: 'https://myaiimagesbucket.s3.eu-north-1.amazonaws.com/AI%20Images/dress_c2/dress_c2/Dress_00009_c2.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRjBEAiAw6bjixZFa%2FL1xcD%2BbtMlt2r3N%2BMiblweI36XjmGezDgIgKMOs5qBA0O2x0p33gVJO5%2BS3W07Q5Ij5rNCXlTZQwBgqhQMIPxAAGgw0NzExMTI1MDY3NDQiDLny6a3w4GoGONOHjyriAujmYplRlTsATzlgi6xS1XQIsVosM84dzM5VLOgn%2FAC6J82O4dvVLW%2BHq7QBngwYXB7fj%2BJwI6EcxPNOKm3oD%2BQ2iMqCLRfDYADawLi3Ood2WwPTfL14P1wjSXU6vcYu%2F8iB2VFqIFY6o71WalEbnjW4zhU2%2BxcoHpQ0xbZSt9gDV4Ipovo1HEIbmuwSxQ%2FG%2BeCVui0xTAnphZY1RKco09%2FghfH0teV6e5WnDJvYYMy%2FXcozzohIVprkmEy5cSg7yvcDfV37X0CI2izVAoL9ey57qiX4gSBePAkcO7fcNdhaw9ffLHQbI8GPhuNEKEA2MBiNIgRjeZZE5LM6Rzl2f1VdRt6zUISTmntTSVk5KDMDiSoc1cm8JVA12MnmBncKVlxH1htoow6In0b2NGBi3%2FtS0aYv0LtWky0mVqW0ZfwfVSCZ6fUyQkQjAqS%2BLrUnMOwRsPyu9Ky4gshlU6t78YYmBzDmis%2BzBjq0Aoh8DVbJjhf7bva5ygcxZwWFX%2FhaiTx1XTb%2BqrMpmol1%2BbdFA8wCn2cSCa0dBHWNgyakWKimKQOZHzGZzpaYX0yM72zG%2FDiJq7zrRc25fp%2FGktJ603EbWlwRw9L7fk557mhHNwk4MkbyueBHJWpTbYM%2Fxn1b%2FBF7HLTucEqwipJZ7fSnTDvEonIWAQ4CvgdVAvBLzVMvs33V92sEphF3l1sPerjKHudSJgUWpRRgpltRhSj6GNnhtZix686H7Ys%2BQrResuD6DHi9RCGZ4ElRUM9U4H8QpZzVk%2Frs56uAF42em%2FF53quwz2q561yDfpgZngadJg0L91IYyx5bPTbs1pJg0uP%2BfAwO%2BBLq1LWeuK%2BrSKTLFT7THLyhnlOaEXM0CroZ%2BdL9D1z9F0X0lhZaA5ZZLLbU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240620T124129Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIAW3MD6LV4H2UXYH5J%2F20240620%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Signature=74705b75c47bbd7234a9895d1bc2609ce8785d79c366d802630ead3105b64dc7',//'../assets/anime/character_1/img2.jpeg',
     url: '/assets/anime/character_1/posed_image_2.png',
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
  ];
}
