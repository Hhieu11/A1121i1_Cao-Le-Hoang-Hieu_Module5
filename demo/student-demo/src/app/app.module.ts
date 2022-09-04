import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StuentChitietComponent } from './stuent-chitiet/stuent-chitiet.component';
import { StudentCreateComponent } from './student-create/student-create.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentdetailComponent,
    StuentChitietComponent,
    StudentCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
