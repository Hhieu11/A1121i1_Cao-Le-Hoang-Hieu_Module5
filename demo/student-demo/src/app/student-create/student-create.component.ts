import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {StudentDao} from '../data/StudentDao';
import {StudentService} from '../service/student.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
 // @ts-ignore
  studentForm:FormGroup;
  constructor(private studentService:StudentService,
              private activatedRoute:ActivatedRoute,
              private router:Router
  ) { }

  ngOnInit(): void {
    this.studentForm= new FormGroup({
      id:new FormControl(),
      name:new FormControl(),
      image:new FormControl(),
      mark:new FormControl(),
      date:new FormControl(),

    })

  }

  createStu() {
  const student=this.studentForm.value;
this.studentService.createStudent(student).subscribe(()=>{
this.studentForm.reset();
this.router.navigateByUrl("student-list");
})
  }
}
