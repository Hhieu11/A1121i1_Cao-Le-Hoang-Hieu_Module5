import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StuentChitietComponent } from './stuent-chitiet/stuent-chitiet.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { UpdateStudentComponent } from './update-student/update-student.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    StudentdetailComponent,
    StuentChitietComponent,
    StudentCreateComponent,
    UpdateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
