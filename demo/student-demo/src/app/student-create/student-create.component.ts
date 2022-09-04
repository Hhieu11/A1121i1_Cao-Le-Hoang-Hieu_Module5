import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {StudentDao} from '../data/StudentDao';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
 // @ts-ignore
  studentForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.studentForm= new FormGroup({
      id:new FormControl(),
      name:new FormControl(),
      image:new FormControl(),
      mark:new FormControl(),

    })

  }

  createStu() {
    StudentDao.student.push(this.studentForm.value);
    this.studentForm.reset();
  }
}
