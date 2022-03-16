import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountdownTimerService } from 'src/app/modules/countdown-timer/countdown-timer.service';

@Component({
  selector: 'app-log-timestamp',
  templateUrl: './log-timestamp.component.html',
  styleUrls: ['./log-timestamp.component.scss']
})
export class LogTimestampComponent implements OnInit{

  newArr :Array<[]>=[]
  mylogs:any;
  currentUrl:string='';
  @Input() start:Array<[]> =[];
  @Input() pause:Array<[]> =[];

  @Input() log:any;
  constructor(private _countDownTimer :CountdownTimerService,private _router:Router) { }
  ngOnInit(): void {

    this.currentUrl = this._router.url
    if(this.currentUrl=='/timer-only'){
      this._countDownTimer.displayLogs.subscribe(res=>{
        this.mylogs = res;
      })
    }
  }

}
