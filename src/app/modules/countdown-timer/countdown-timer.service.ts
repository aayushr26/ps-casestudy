import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountdownTimerService {

  displayTimer = new BehaviorSubject<any>(0);
  displayLogs = new Subject();
  displayStartCount = new BehaviorSubject<any>(0);
  displayPauseCount = new BehaviorSubject<any>(0);

  constructor() { }

  resetDisplay() {
    this.displayTimer.next(0);
    this.displayLogs.next(0);
    this.displayStartCount.next(0);
    this.displayPauseCount.next(0);

  }
}
