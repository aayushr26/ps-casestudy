import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CountdownTimerService } from 'src/app/modules/countdown-timer/countdown-timer.service';

@Component({
  selector: 'app-count-start-pause',
  templateUrl: './count-start-pause.component.html',
  styleUrls: ['./count-start-pause.component.scss']
})
export class CountStartPauseComponent implements OnInit, OnDestroy {

  @Input() startCount: any;
  @Input() pauseCount: any;
  subscription: Subscription = new Subscription();
  currentUrl: string = '';
  start: any;
  pause: any;
  constructor(private __countDownTimer: CountdownTimerService, private _router: Router) { }

  ngOnInit(): void {


    this.currentUrl = this._router.url
    if (this.currentUrl == '/timer-only') {
      this.subscription.add(
        this.__countDownTimer.displayStartCount.subscribe(res => {
          this.start = res;
        })
      )

      this.subscription.add(
        this.__countDownTimer.displayPauseCount.subscribe(res => {
          this.pause = res;
        })
      )
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
