import {Component, OnInit, TemplateRef} from '@angular/core';
import {IStudent} from '../istudent';
import {StudentDao} from '../data/StudentDao';

@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.css']
})
export class StudentdetailComponent implements OnInit {
  student: IStudent[]=StudentDao.getAllList();
  student1:IStudent;
  _contentDetails: any;
  _stu: IStudent=new class implements IStudent {
    id: number;
    image: string;
    mark: number;
    name: string;
  }
  constructor() { }
  displayStyle = "none";
  displayStyle1 = "none";

  ngOnInit(): void {
  }

  // getMark(value: any) {
  //   this.student.mark = value;
  //
  // }
  openPopup() {
    this.displayStyle="block";


  }

  closePopup() {
    this.displayStyle="none"

  }

  deleteStudent() {
    this.student.pop();
  }

  // openPopupDetail( stu: IStudent) {
  //   this.displayStyle1="block";
  //   document.getElementById('sid').setAttribute('value', String(stu.id));
  //   document.getElementById('sname').setAttribute('value', stu.name);
  //   document.getElementById('smark').setAttribute('value', String(stu.mark));
  //   document.getElementById('simage').setAttribute('value', stu.image);
  // }

  closePopupEdit() {
    this.displayStyle1="none"
  }


  openDetail() {
    this.displayStyle1="block";
  }

  openPopupDetail(id: number) {
    this.displayStyle1="block";
    this._stu.id=id;
    this._stu.name=this.student[id].name;
    this._stu.mark=this.student[id].mark;
    this._stu.image=this.student[id].image;

  }

  getStudent(item: IStudent) {
    this.student1=item;

  }

  markHandler($event: number) {
  this.student1[this.student1.mark];

  }
}
