import { Component, OnInit } from '@angular/core';
import {Student} from "../modal/student";
import {Class} from "../modal/class";
import {FormControl, FormGroup} from "@angular/forms";
import {StudentService} from "../service/student.service";
import {ClassService} from "../service/class.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  studentForm: FormGroup;
  id: number;
  classN: Class[] = [];
  student: Student[] = []

  constructor(private studentService: StudentService,
              private classService: ClassService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.getAllClass();
    this.id = this.activatedRoute.snapshot.params.id;
    this.getStudent(this.id);
  }

  ngOnInit(): void {
  }

  getAllClass() {
    this.classService.getAll().subscribe(data => {
      this.classN = data;
    });
  }

  getStudent(id: number) {
    return this.studentService.findById(id).subscribe(student => {
      this.studentForm = new FormGroup({
        id: new FormControl(student.id),
        name: new FormControl(student.name),
        age: new FormControl(student.age),
        mark: new FormControl(student.mark),
        class: new FormControl(student.class)
      })
    });
  }


  updateStudent(id: number) {
    const student = this.studentForm.value;
    this.studentService.updateStudent(id, student).subscribe(() => {


      }, () => {
        console.log(student);
      },
      () => {
        this.router.navigateByUrl('list');
      }
    );

  }

  compareFn(c1: Class, c2: Class): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
