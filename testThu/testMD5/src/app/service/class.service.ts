import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../modal/student";
import {Class} from "../modal/class";

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  readonly API_URL="http://localhost:3000/class";
  getAll():Observable<Class[]>{
    return  this.httpClient.get<Class[]>(this.API_URL)
  }
  constructor(private httpClient:HttpClient) { }
}
