import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'banner' , pathMatch:'full'},
  {path:'banner', loadChildren: () => import('./modules/banner/banner.module').then(m=>m.BannerModule)},
  {path:'grid-list-view', loadChildren: () => import('./modules/grid-list-view/grid-list-view.module').then(m=>m.GridListViewModule)},
  {path:'countdown-timer',loadChildren:()=>import('./modules/countdown-timer/countdown-timer.module').then(m=>m.CountdownTimerModule)},
  {path:'timer-only',loadChildren:()=>import('./modules/countdown-timer/countdown-timer.module').then(m=>m.CountdownTimerModule)},
  {path:'user-list',loadChildren:()=>import('./modules/user-list/user-list.module').then(m=>m.UserListModule)},
  {path:'dynamic-div',loadChildren:()=>import('./modules/dynamic-div/dynamic-div.module').then(m=>m.DynamicDivModule)},
  {path:'**', loadChildren: () => import('./not-found/not-found.module').then(m=>m.NotFoundModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
