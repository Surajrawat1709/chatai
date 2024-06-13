import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './ChatPage/header/header.component';
import { MessagePanelComponent } from './ChatPage/message-panel/message-panel.component';
import { UserInputComponent } from './ChatPage/user-input/user-input.component';
import { Message, MESSAGE_TYPE, OpenAIResponse } from './utility/constants';
import { OpenAIService } from './openai.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginLayoutComponent } from './LoginPage/login-layout/login-layout.component';
import { LoginComponent } from './LoginPage/login/login.component';
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
    RouterOutlet
  ],
  providers: [OpenAIService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent  {

}

