import { Component, OnInit } from '@angular/core';
import {Student} from "../modal/student";
import {Class} from "../modal/class";
import {StudentService} from "../service/student.service";
import {ClassService} from "../service/class.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import validate = WebAssembly.validate;

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
student:Student[]=[];
studentForm:FormGroup;
classN:Class[]=[];
  constructor(private studentService:StudentService,
              private classService:ClassService,
              private activatedRoute:ActivatedRoute,
              private router:Router) {
    this.getAllClass();
  }

  ngOnInit(): void {
    this.studentForm=new FormGroup({
    id:new FormControl("",[Validators.required]),
    name:new FormControl("",[Validators.required,Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}")]),
    age:new FormControl("",[Validators.required,Validators.min(18)]),
    mark:new FormControl("",[Validators.required,Validators.minLength(3)]),
    class:new FormControl("",[Validators.required]),
    })
  }

  getAllClass(){
    this.classService.getAll().subscribe(data => {
      this.classN = data;
    });
  }
  submit(){
    const student=this.studentForm.value;
    this.studentService.saveStudent(student).subscribe(()=>{
      this.router.navigateByUrl("list");
    })
  }
}
