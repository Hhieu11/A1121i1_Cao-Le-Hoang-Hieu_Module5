import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calculator-app';
  number1: number=0;
  number2: number=0;
  result:number=0;

  add() {
    this.result=(this.number1+this.number2)
  }
  sub() {
    this.result=(this.number1-this.number2)
  }
  multi() {
    this.result=(this.number1*this.number2)
  }
  div() {
    this.result=(this.number1/this.number2)
  }
}
