import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IStudent} from '../istudent';

@Component({
  selector: 'app-stuent-chitiet',
  templateUrl: './stuent-chitiet.component.html',
  styleUrls: ['./stuent-chitiet.component.css']
})
export class StuentChitietComponent implements OnInit {
  @Input('student-detail')
  student:IStudent;
  @Output('changeM') markChange:EventEmitter<number>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  changeMark(value: string) {
  this.student.mark=Number(value);
  this.markChange.emit(this.student.mark)


  }
}
