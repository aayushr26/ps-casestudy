import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {

  time : number = 0;
  countStart: number=0;
  countPause:number = 0;
  dateStart:any;
  datePause:any;
  logs:any;

  constructor() { }

  ngOnInit(): void {
  }

  displayTimer(ev:any){
    console.log(ev);
    this.time = ev;
  }

  startCount(ev:any){
    this.countStart = ev;
  }

  pauseCount(ev:any){
    this.countPause = ev;
  }

  setLogs(ev:any){
    this.logs = ev;
  }
}
