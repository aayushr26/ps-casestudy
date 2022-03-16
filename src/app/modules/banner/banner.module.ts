import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { Route, RouterModule } from '@angular/router';

const routes : Route[]=[
  {path:'',component:BannerComponent}
]

@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BannerModule { }
