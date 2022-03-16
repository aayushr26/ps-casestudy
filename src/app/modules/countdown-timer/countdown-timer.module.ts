import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownTimerComponent } from './countdown-timer.component';
import { Route, RouterModule } from '@angular/router';
import { DisplayCountdownModule } from '../../shared/display-countdown/display-countdown.module';
import { LogTimestampModule } from '../../shared/log-timestamp/log-timestamp.module';
import { InputTimerModule } from '../../shared/input-timer/input-timer.module';
import { CountStartPauseModule } from '../../shared/count-start-pause/count-start-pause.module';


const routes : Route[]=[
  {path:'',component:CountdownTimerComponent}
]

@NgModule({
  declarations: [
    CountdownTimerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DisplayCountdownModule,
    LogTimestampModule,
    InputTimerModule,
    CountStartPauseModule
  ]
})
export class CountdownTimerModule { }
