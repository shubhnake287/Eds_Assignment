import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDetailComponent } from './home/home-detail.component';


export const routes: Routes = [
  { path: 'Home', component: HomeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class homeRoutingModule { }
