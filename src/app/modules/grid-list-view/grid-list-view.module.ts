import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridListViewComponent } from './grid-list-view.component';
import { Route, RouterModule } from '@angular/router';

const routes : Route[]=[
  {path:'',component:GridListViewComponent}
]


@NgModule({
  declarations: [
    GridListViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GridListViewModule { }
