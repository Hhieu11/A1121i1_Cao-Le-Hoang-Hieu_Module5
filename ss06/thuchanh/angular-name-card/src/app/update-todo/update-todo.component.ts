import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {
todoForm:FormGroup;
id:number;
  constructor( private service:TodoService,
               private activatedRoute:ActivatedRoute,
               private router:Router) {
  this.activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
this.id=+paramMap.get('id');
this.getTodo(this.id)
  });
  }

getTodo(id:number){
return this.service.findById(id).subscribe(todo =>{
this.todoForm=new FormGroup({
content:new FormControl(todo.content)
});
});
}

updateTodo(id:number){
const todo=this.todoForm.value;
this.service.updateTodo(id,todo).subscribe(()=>{
this.router.navigateByUrl('')
})
}
  ngOnInit(): void {
  }

}
