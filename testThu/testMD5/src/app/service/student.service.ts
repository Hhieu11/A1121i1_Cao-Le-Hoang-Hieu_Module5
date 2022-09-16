import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../modal/student";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  readonly API_URL="http://localhost:3000/student";
  getAll():Observable<Student[]>{
    return  this.http.get<Student[]>(this.API_URL)
  }
  saveStudent(student):Observable<Student>{
    return this.http.post<Student>(this.API_URL,student);
  }


  findById(id:number):Observable<Student>{
    return  this.http.get<Student>(this.API_URL+'/'+id);
  }

  updateStudent(id:number,student:Student):Observable<Student>{
    return this.http.put<Student>(this.API_URL+'/'+id,student);
  }
  deleteStudent(id: number):Observable<Student> {
    return  this.http.delete<Student>(this.API_URL+'/'+id);
  }

  search2(name:string, id: number):Observable<Student[]>{
    return this.http.get<Student[]>(`${this.API_URL}?name_like=${name}&class.id_like=${id}`);
  }

  constructor(private http:HttpClient) { }
}
