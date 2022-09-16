import {ClassSansProvider, Component, OnInit} from '@angular/core';
import {Student} from "../modal/student";
import {Class} from "../modal/class";
import {StudentService} from "../service/student.service";
import {ClassService} from "../service/class.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
student:Student[]=[];
classN:Class[]=[];
deleteStudent:Student={
class:{}
};
p:number=1
  searchForm:FormGroup;


  constructor( private studentService:StudentService,
               private classService:ClassService,
               private activatedRoute:ActivatedRoute,
               private router:Router,
               private fb: FormBuilder) {
    this.getAllClass();
    this.searchForm = this.fb.group({
      name: '',
      class: ''

    })

  }

  ngOnInit(): void {
    this.getAllStudent();
  }

  getAllClass(){
    this.classService.getAll().subscribe(data => {
      this.classN = data;
    });
  }
  getAllStudent(){
    this.studentService.getAll().subscribe(
      (data)=>{
        this.student=data;
      }
    )
  }

  sendStudentToDelete(stu: Student) {
    this.deleteStudent=stu;

  }
  delete() {
    this.studentService.deleteStudent(this.deleteStudent.id).subscribe(() => {
      this.ngOnInit();
    });
  }

  search2() {
    this.studentService.search2(this.searchForm.get('name').value,this.searchForm.get('class').value).subscribe(student => this.student = student);
    this.p=1;
  }
}
