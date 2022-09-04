import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IRatingUnit} from '../irating-unit';
import {Child} from '../child';

@Component({
  selector: 'app-ratingbar-child',
  templateUrl: './ratingbar-child.component.html',
  styleUrls: ['./ratingbar-child.component.css']
})
export class RatingbarChildComponent implements OnInit {
rating:IRatingUnit[]=Child.rating

@Output("rating")value=new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }
  sendData(value: number) {
    this.value.emit(value);
    for (let i:number = 0;i<value;i++){
      this.rating[i].active = 1;
    }
    for (let i:number=value;i<10;i++){
      this.rating[i].active = 0;
    }
  }

}
