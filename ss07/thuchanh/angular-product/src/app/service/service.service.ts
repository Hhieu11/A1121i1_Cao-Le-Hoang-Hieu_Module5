import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  readonly API_URL="http://localhost:3000/product";

  getAll():Observable<Product[]>{
    return  this.httpClient.get<Product[]>(this.API_URL)
  }

  saveProduct(product):Observable<Product>{
    return this.httpClient.post<Product>(this.API_URL,product);
  }

  findById(id:number):Observable<Product>{
    return  this.httpClient.get<Product>(this.API_URL+'/'+id);
  }

  updateProduct(id:number,product:Product):Observable<Product>{
    return this.httpClient.put<Product>(this.API_URL+'/'+id,product);

  }
  deleteProduct(id: number):Observable<Product> {
   return  this.httpClient.delete<Product>(this.API_URL+'/'+id);
  }

  search(name:string):Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.API_URL+'?name_like='+name);
  }

  constructor(private httpClient:HttpClient) { }
}
