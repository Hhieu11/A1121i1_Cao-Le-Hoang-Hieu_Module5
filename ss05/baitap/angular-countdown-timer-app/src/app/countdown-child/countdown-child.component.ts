import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-countdown-child',
  templateUrl: './countdown-child.component.html',
  styleUrls: ['./countdown-child.component.css']
})
export class CountdownChildComponent implements OnInit {

  remainingTime: number;
  @Input() seconds = 10;
  @Output() finish = new EventEmitter<boolean>();
  private intervalId = 0;

  clearTimer() {
    clearInterval(this.intervalId);
  }

  ngOnInit() {
    this.reset();
  }

  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }
  stop() {
    this.clearTimer();
  }

  reset() {
    this.clearTimer();
    this.remainingTime = this.seconds;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.clearTimer();
        this.finish.emit(true);
      } else {
      }
    }, 1000);
  }

}
