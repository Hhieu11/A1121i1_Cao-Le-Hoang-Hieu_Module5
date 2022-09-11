import {Component, OnInit, TemplateRef} from '@angular/core';
import {IStudent} from '../istudent';
import {StudentDao} from '../data/StudentDao';
import {StudentService} from '../service/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.css']
})
export class StudentdetailComponent implements OnInit {
  studentDele: IStudent = {};
  student1: IStudent[] = [];
  id:number;
  p:number=1;


  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.studentService.getAll().subscribe((data) => {
      this.student1 = data;

    })
  }

  // markHandler($event: number) {
  // this.student1[this.student1.mark];
  //
  // }
  sendProductToDelete(student: IStudent) {
    this.studentDele = student;
  }

  delete() {
    this.studentService.deteteStudent(this.studentDele.id).subscribe(() => {
      this.ngOnInit();
    });
  }
}
