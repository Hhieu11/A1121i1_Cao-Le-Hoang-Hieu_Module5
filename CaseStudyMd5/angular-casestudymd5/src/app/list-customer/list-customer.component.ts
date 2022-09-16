import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {CustomerDao} from '../Dao/CustomerDao';
import {CustomerService} from '../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customer: Customer[] = []
  p: number = 1;
  deleteCus: Customer = {};
  info: Customer ={};
  searchForm:FormGroup;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      email: '',

    })
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAllCustomer().subscribe((data) => {
      this.customer = data;
    });

  }

  sentDelete(customer: Customer) {
    this.deleteCus = customer;
  }
  sentInfo(customer: Customer) {
    this.info = customer;
  }


  delete() {
    this.customerService.deleteCustomer(this.deleteCus.id).subscribe(() => {
      this.ngOnInit();
    });

  }
  searchName(nameCustomer:string){
    this.customerService.searchName(nameCustomer).subscribe((data)=>{
      this.customer=data;
      console.log(this.customer);
    })
  }

  search2() {
    // const check = this.searchForm.value;
    this.customerService.search2(this.searchForm.get('email').value).subscribe(
      (cus) =>{ this.customer = cus;
      console.log(cus)
      });

  }


}
