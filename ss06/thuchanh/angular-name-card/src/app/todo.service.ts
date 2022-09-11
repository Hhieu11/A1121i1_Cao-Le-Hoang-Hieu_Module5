import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Todo} from "./todo";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  readonly API_URL="http://localhost:3000/todo";

getAll():Observable<Todo[]>{
return  this.http.get<Todo[]>(this.API_URL)
}

saveTodo(todo):Observable<Todo>{
return this.http.post<Todo>(this.API_URL,todo);
}

  findById(id:number):Observable<Todo>{
    return this.http.get<Todo>(this.API_URL+'/'+id);
  }

  updateTodo(id:number,todo:Todo):Observable<Todo>{
return this.http.put<Todo>(this.API_URL+'/'+id,todo);
  }





  constructor(private http:HttpClient) { }
}
