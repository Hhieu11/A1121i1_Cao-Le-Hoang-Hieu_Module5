import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo";
import {FormControl} from "@angular/forms";
import {TodoService} from "../todo.service";
import {ActivatedRoute, Router} from "@angular/router";
let _id = 1;
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();
  constructor(private service:TodoService,
              private activatedRoute:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
this.getAll();
  }

  getAll(){
this.service.getAll().subscribe((data)=>{
this.todos=data;
})
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.service.saveTodo(todo).subscribe(()=>{
        this.content.reset();
        this.ngOnInit();
      })

    }
  }
}
