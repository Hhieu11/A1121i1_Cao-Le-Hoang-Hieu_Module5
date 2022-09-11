import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from "./todo/todo.component";
import {UpdateTodoComponent} from "./update-todo/update-todo.component";


const routes: Routes = [
  {path:'',component:TodoComponent},
  {path:'todo/edit/:id',component:UpdateTodoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
