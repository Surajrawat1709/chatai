import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './ChatPage/header/header.component';
import { MessagePanelComponent } from './ChatPage/message-panel/message-panel.component';
import { UserInputComponent } from './ChatPage/user-input/user-input.component';
import { Message, MESSAGE_TYPE, OpenAIResponse } from './utility/constants';
import { v4 as uuidv4 } from 'uuid';
import { OpenAIService } from './openai.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginLayoutComponent } from './LoginPage/login-layout/login-layout.component';
import { LoginComponent } from './LoginPage/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './LoginPage/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { BodyComponent } from './sidenav/body/body.component';
import { DashboardComponent1 } from './sidenav/dashboard/dashboard.component';
import { ProductsComponent } from './sidenav/products/products.component';
import { StatisticsComponent } from './sidenav/statistics/statistics.component';
import { CoupensComponent } from './sidenav/coupens/coupens.component';
import { PagesComponent } from './sidenav/pages/pages.component';
import { MediaComponent } from './sidenav/media/media.component';
import { SettingsComponent } from './sidenav/settings/settings.component';
import { SelectCharacterComponent } from './select-character/select-character.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
   // AppRoutingModule,
    DashboardComponent,
    RouterOutlet,
    HeaderComponent,
    MessagePanelComponent,
    UserInputComponent,
    HttpClientModule,
    HeaderComponent,
    UserInputComponent,
    MessagePanelComponent,
    LoginComponent,
    LoginLayoutComponent,
    BodyComponent,
    DashboardComponent1,
    ProductsComponent,
    StatisticsComponent,
    CoupensComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    SelectCharacterComponent
  ],
  providers: [OpenAIService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent  {
  title = 'ecommerce';
  cartProducts: any[] = [];
  subTotal: number = 0;
  // constructor(private productService: ProductService, private router: Router) {
  //   this.productService.cartAddedSubject.subscribe(res=> {
  //     debugger;
  //     this.loadCart();
  //   })
 // }

  ngOnInit(): void {
    this.loadCart();
  }
  redirectToSale() {
    //this.router.navigateByUrl("/sale");
  }

  loadCart() {
    this.subTotal = 0;
    //this.productService.getCartItemsByCustId(1).subscribe((res: any)=> {
      //this.cartProducts = res.data;
      this.cartProducts.forEach(element => {
          this.subTotal =  this.subTotal + element.productPrice;
      });
      debugger;
   // })
  // data: Message[] = [];
  // loading: boolean = false

  // constructor(private openaiService: OpenAIService) {}

  // getMessage($event: string){
  //   if(!this.loading){
  //     let messageObject: Message = this.createMessage($event, MESSAGE_TYPE.USER)
  //     this.data = [...this.data].concat(messageObject)
  //     this.loading = true;

  //     this.openaiService.QueryPrompt($event).subscribe(
  //       (response: OpenAIResponse): void => {
  //         messageObject = this.createMessage(response.content.replace(/【[0-9]*†source】/g, ''), MESSAGE_TYPE.ASSISTANT)
  //         this.data = [...this.data].concat(messageObject)
  //         this.loading = false;
  //       })
  //   }
  //   else{
  //     let messageObject: Message = this.createMessage($event, MESSAGE_TYPE.USER)
  //     this.data = [...this.data].concat(messageObject)
  //   }
  // }

  // createMessage(content: string, type: MESSAGE_TYPE): Message{
  //   return {
  //     id: uuidv4(),
  //     sender: type,
  //     content: content,
  //     dateTime: new Date(),
  //   }
  // }

  // public debounce(func: Function, timeout = 400){
  //   let timer: any;
  //   return (...args: any) => {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => { func.apply(this, args); }, timeout);
  //   };
  // }

}
}

