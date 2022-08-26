import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  result:string = 'color picker';
  color: any;
  constructor() { }

  ngOnInit(): void {
  }


  red(value: any) {
    this.color = 'red';

  }

  blue(value: any) {
    this.color = 'blue';
  }
  green(value: any) {
    this.color = 'green';
  }
  pink(value: any) {
    this.color = 'pink';
  }
  yellow(value: any) {
    this.color = 'yellow';
  }
}
