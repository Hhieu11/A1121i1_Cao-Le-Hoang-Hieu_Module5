import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
    id: new FormControl('', [Validators.required]),
    nameCustomer: new FormControl('', [Validators.required, Validators.pattern('([A-Z][a-z]+\\s)+')]),
    date: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[0-9]{7}$')]),
    email: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}")]),
    typeCustomer: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required])
  });
  }

  createCustomer() {
  const customer=this.formCustomer.value;
  this.customerService.createCustomer(customer).subscribe(()=>
  {
    this.router.navigateByUrl("list-customer");
  })
  }

  reset() {
    this.formCustomer.reset();
    this.router.navigateByUrl("create-customer");
  }
}
