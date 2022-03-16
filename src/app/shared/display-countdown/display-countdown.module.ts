import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayCountdownComponent } from './display-countdown.component';



@NgModule({
  declarations: [
    DisplayCountdownComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DisplayCountdownComponent]
})
export class DisplayCountdownModule { }
