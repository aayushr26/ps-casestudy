import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountdownTimerService } from 'src/app/modules/countdown-timer/countdown-timer.service';

@Component({
  selector: 'app-display-countdown',
  templateUrl: './display-countdown.component.html',
  styleUrls: ['./display-countdown.component.scss']
})
export class DisplayCountdownComponent implements OnInit {

  @Input() timer :any;
  timing :any;
  
  currentUrl :string= ''

  constructor(private __countDownTimer : CountdownTimerService,private _router:Router) { }

  ngOnInit(): void {

    
    this.currentUrl = this._router.url
    if(this.currentUrl=='/timer-only'){
      this.__countDownTimer.displayTimer.subscribe(res=>{
            this.timing = res;
      })
    }
  }


}
