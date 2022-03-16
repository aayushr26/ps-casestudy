import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDivComponent } from './dynamic-div.component';
import { Route, RouterModule } from '@angular/router';

const routes : Route[]=[
  {path:'',component:DynamicDivComponent}
]


@NgModule({
  declarations: [
    DynamicDivComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DynamicDivModule { }
