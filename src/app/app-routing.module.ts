import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './sidenav/body/body.component';
import { DashboardComponent1 } from './sidenav/dashboard/dashboard.component';
import { ProductsComponent } from './sidenav/products/products.component';
import { StatisticsComponent } from './sidenav/statistics/statistics.component';
import { CoupensComponent } from './sidenav/coupens/coupens.component';
import { PagesComponent } from './sidenav/pages/pages.component';
import { MediaComponent } from './sidenav/media/media.component';
import { SettingsComponent } from './sidenav/settings/settings.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent1},
  {path: 'products', component: ProductsComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'coupens', component: CoupensComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'media', component: MediaComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
