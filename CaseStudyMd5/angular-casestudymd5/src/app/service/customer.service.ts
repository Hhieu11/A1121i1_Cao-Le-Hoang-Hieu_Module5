import { Injectable } from '@angular/core';
import {CustomerDao} from '../Dao/CustomerDao';
import {Customer} from '../customer';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readonly API_URL="http://localhost:3000/customer";


  getAllCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.API_URL);
  }

  createCustomer(customer):Observable<Customer>{
  return this.http.post<Customer>(this.API_URL,customer);
  }


  findById(id:number):Observable<Customer>{
    return this.http.get<Customer>(this.API_URL+'/'+id);
  }

  updateCustomer(id:number,customer:Customer):Observable<Customer>{
    return this.http.put<Customer>(this.API_URL+'/'+id,customer)
  }
  deleteCustomer(id:number):Observable<Customer>{
    return this.http.delete<Customer>(this.API_URL+'/'+id);
  }

  searchName(nameCustomer:string):Observable<Customer[]>{
    return this.http.get<Customer[]>(this.API_URL+'?nameCustomer_like='+nameCustomer);
  }



  search2(nameCustomer:string):Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.API_URL}?nameCustomer_like=${nameCustomer}`);
  }


  constructor( private http:HttpClient) { }
}
