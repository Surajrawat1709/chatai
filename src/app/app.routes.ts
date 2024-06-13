import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './LoginPage/login/login.component';
import { LoginLayoutComponent } from './LoginPage/login-layout/login-layout.component';
import { SelectCharacterComponent } from './select-character/select-character.component';
import { MessagePanelComponent } from './ChatPage/message-panel/message-panel.component';
import { MessageComponent as MCP, MessageComponent } from './ChatPage/message/message.component';
export const routes: Routes = [{
  path:'',
  redirectTo : 'login',
  pathMatch:'full'
},
{
  path:'login',
  component: MCP
},
{
  path: 'chatpage',
  component: MessageComponent
},
{
  path:'selectCharacter',
  component: SelectCharacterComponent
},
{
  path: 'chatpagepankaj',
  component: MCP
},
{
  path: 'api',
  component: MCP
},
{
  path:'',
  component: LoginLayoutComponent,
  children: [

  ]
}
];

