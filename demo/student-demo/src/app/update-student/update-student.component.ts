import { Component, OnInit } from '@angular/core';
import {StudentService} from '../service/student.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  updateForm:FormGroup;
  id:number;

  constructor(private studentService:StudentService,
              private activatedRoute:ActivatedRoute,
              private router:Router) {
this.activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
this.id=+paramMap.get('id');
this.getStudent(this.id);
})
  }

getStudent(id:number){
return this.studentService.findById(id).subscribe((student)=>{
  this.updateForm= new FormGroup({
    id:new FormControl(student.id),
    name:new FormControl(student.name),
    mark:new FormControl(student.mark),
    image:new FormControl(student.image),
    date:new FormControl(student.date),
  });
});
}

updateStudent(id:number){
const student=this.updateForm.value;
this.studentService.updateStudent(id,student).subscribe(()=>{this.router.navigateByUrl("")})
}

  ngOnInit(): void {
  }

}
