import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { Route, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
const routes : Route[]=[
  {path:'',component:UserListComponent}
]



@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class UserListModule { }
