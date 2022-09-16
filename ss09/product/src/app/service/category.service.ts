import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly API_URL="http://localhost:3000/category";

  getAll():Observable<Category[]>{
    return  this.http.get<Category[]>(this.API_URL);
  }

  constructor(private http:HttpClient) { }
}
