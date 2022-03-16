import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTimerComponent } from './input-timer.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputTimerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[InputTimerComponent]
})
export class InputTimerModule { }
