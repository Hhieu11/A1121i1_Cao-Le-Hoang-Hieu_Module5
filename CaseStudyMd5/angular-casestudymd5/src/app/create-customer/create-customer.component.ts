import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerDao} from '../Dao/CustomerDao';
import {Router} from '@angular/router';
import {CustomerService} from '../service/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  formCustomer:FormGroup;

  constructor( private customerService:CustomerService,
              private router:Router
             ) { }

  ngOnInit(): void {
  this.formCustomer=new FormGroup({
    id: new FormControl(),
    nameCustomer: new FormControl(),
    date: new FormControl(),
    gender: new FormControl(),
    idCard: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    typeCustomer: new FormControl(),
    address: new FormControl()
  });
  }

  createCustomer() {
  const customer=this.formCustomer.value;
  this.customerService.createCustomer(customer).subscribe(()=>
  {
  this.formCustomer.reset();
    this.router.navigateByUrl("list-customer");
  })
  }
}
