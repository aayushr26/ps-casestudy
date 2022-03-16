import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountStartPauseComponent } from './count-start-pause.component';



@NgModule({
  declarations: [
    CountStartPauseComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CountStartPauseComponent]
})
export class CountStartPauseModule { }
