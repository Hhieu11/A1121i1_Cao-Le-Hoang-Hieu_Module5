import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";
import {Catelogy} from "../model/catelogy";

@Injectable({
  providedIn: 'root'
})
export class CatelogyService {
  readonly API_URL="http://localhost:3000/catelogy";

  getAll():Observable<Catelogy[]>{
    return  this.http.get<Catelogy[]>(this.API_URL);
  }

  constructor(private http:HttpClient) { }
}
