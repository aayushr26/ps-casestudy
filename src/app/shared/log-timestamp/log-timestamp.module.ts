import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogTimestampComponent } from './log-timestamp.component';



@NgModule({
  declarations: [
    LogTimestampComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LogTimestampComponent]
})
export class LogTimestampModule { }
