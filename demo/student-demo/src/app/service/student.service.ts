import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IStudent} from '../istudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  readonly API_URL="http://localhost:3000/student";

  getAll():Observable<IStudent[]>{
  return this.http.get<IStudent[]>(this.API_URL);
  }
  createStudent(student):Observable<IStudent>{
return this.http.post<IStudent>(this.API_URL,student);
  }

  findById(id:number):Observable<IStudent>{
    return  this.http.get<IStudent>(this.API_URL+'/'+id);
  }

  updateStudent(id:number,student:IStudent):Observable<IStudent>{
  return this.http.put<IStudent>(this.API_URL+'/'+id,student);
  }

  deteteStudent(id:number):Observable<IStudent>{
return this.http.delete<IStudent>(this.API_URL+'/'+id);
}

  constructor(private http:HttpClient) { }
}
