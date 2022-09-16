import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contract} from '../contract';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  readonly API_URL="http://localhost:3000/contract";

  getAll():Observable<Contract[]>{
    return  this.http.get<Contract[]>(this.API_URL)
  }
  saveContract(contract):Observable<Contract>{
    return this.http.post<Contract>(this.API_URL,contract);
  }

  findById(id:number):Observable<Contract>{
    return  this.http.get<Contract>(this.API_URL+'/'+id);
  }

  updateProduct(id:number,contract:Contract):Observable<Contract>{
    return this.http.put<Contract>(this.API_URL+'/'+id,contract);
  }

  deleteProduct(id: number):Observable<Contract> {
    return  this.http.delete<Contract>(this.API_URL+'/'+id);
  }
  constructor(private http:HttpClient) { }
}
