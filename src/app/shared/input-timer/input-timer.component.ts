import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CountdownTimerService } from 'src/app/modules/countdown-timer/countdown-timer.service';


@Component({
  selector: 'app-input-timer',
  templateUrl: './input-timer.component.html',
  styleUrls: ['./input-timer.component.scss']
})
export class InputTimerComponent implements OnInit,OnDestroy {
  
  setLogs:Array<[]> = [];
  inputField = new FormControl(1000)
  @Output() displayTime = new EventEmitter()
  @Output() countStart = new EventEmitter();
  @Output() countPause = new EventEmitter();
  @Output() logsSet = new EventEmitter();

  interval: any;
  setTime :any;
  pausingArray:Array<[]>= [];
  toggle :boolean = true;
  startCount:number = 0;
  pauseCount:number = 0
  currentUrl:string='';
  constructor(private _countdownTimerService : CountdownTimerService,private _router:Router) { }

  ngOnInit(): void {
    this.currentUrl = this._router.url;
  }

  startTimer(timerLeft:any){
    let date:any = new Date()
    let obj:any={
      status :'start',
      newDate:date
    }

    if(this.inputField.value){
    this.startCount++;
    this.setLogs.push(obj);
  
    if(this.currentUrl =='/countdown-timer'){
      this.logsSet.emit(this.setLogs);
    }
   else{
    this._countdownTimerService.displayLogs.next(this.setLogs);
   }

   if(this.currentUrl =='/countdown-timer'){
    this.countStart.emit(this.startCount);
    }
  else{
  this._countdownTimerService.displayStartCount.next(this.startCount);
  }
 
  
    this.toggle = false
    this.interval = setInterval(() => {
      if(Number(timerLeft) > 0) {
        Number(timerLeft--);
        this.setTime = Number(timerLeft);
        this.inputField.setValue(this.setTime)

        if(this.currentUrl =='/countdown-timer'){
          this.displayTime.emit(timerLeft);
        }
       else{
        this._countdownTimerService.displayTimer.next(this.setTime);
       }
      } else {
        timerLeft = 0;
      }
    },1000)
  }
  }

  pauseTimer() {
    
    let date:any = new Date()
    let obj:any={
      status :'pause',
      newDate:date
    }

    if(this.inputField.value){
      this.pauseCount++;
    this.setLogs.push(obj);

    if(this.currentUrl =='/countdown-timer'){
      this.logsSet.emit(this.setLogs);
    }
   else{
    this._countdownTimerService.displayLogs.next(this.setLogs);
   }
    

    if(this.currentUrl =='/countdown-timer'){
      this.countPause.emit(this.pauseCount);
      }
    else{
    this._countdownTimerService.displayPauseCount.next(this.pauseCount);
    }
    
    this.toggle=true;
    if(this.setTime){
      let pauseTiming :any = this.setTime;
      this.pausingArray.push(pauseTiming);
    }
  }
   
    clearInterval(this.interval);
  }

  resetTimer(){
    this.inputField.setValue(0);


    if(this.currentUrl =='/countdown-timer'){
      this.displayTime.emit(0);
    }
   else{
    this._countdownTimerService.displayTimer.next(0);
   }

    this.setTime = 0;
    this.toggle=true;
    clearInterval(this.interval);
  }

  ngOnDestroy(): void {
    this._countdownTimerService.resetDisplay()
  }
}
