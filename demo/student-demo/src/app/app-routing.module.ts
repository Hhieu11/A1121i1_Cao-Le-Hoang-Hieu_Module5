import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentdetailComponent} from './studentdetail/studentdetail.component';
import {StudentCreateComponent} from './student-create/student-create.component';
import {UpdateStudentComponent} from './update-student/update-student.component';


const routes: Routes = [
  {path:'student-list',component:StudentdetailComponent},
  {path:'student-list:/id',component:StudentdetailComponent},
  {path:'create',component:StudentCreateComponent},
  {path:'student-edit/:id',component:UpdateStudentComponent},
  {path:'',component:StudentdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
