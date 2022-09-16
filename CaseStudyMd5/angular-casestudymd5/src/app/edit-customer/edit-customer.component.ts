import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerService} from '../service/customer.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  formEdit:FormGroup;
  id:number;

  constructor(private serviceCustomer:CustomerService,
              private activatedRoute:ActivatedRoute,
              private router:Router) {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      this.id=+paramMap.get('id');
      this.getCustomer(this.id);
      // this.formEdit=new FormGroup({
      //   id: new FormControl("",[Validators.required]),
      //   nameCustomer: new FormControl(),
      //   date: new FormControl(),
      //   gender: new FormControl(),
      //   idCard: new FormControl(),
      //   phone: new FormControl(),
      //   email: new FormControl(),
      //   typeCustomer: new FormControl(),
      //   address: new FormControl(),
      //
      // });
    });

  }

  ngOnInit(): void {
  }
  getCustomer(id:number){
    return this.serviceCustomer.findById(id).subscribe((customer)=>{
      this.formEdit=new FormGroup({
          id: new FormControl(customer.id,[Validators.required]),
          nameCustomer: new FormControl(customer.nameCustomer,[Validators.required, Validators.pattern('([A-Z][a-z]+\\s)+')]),
          date: new FormControl(customer.date,[Validators.required]),
          gender: new FormControl(customer.gender,[Validators.required]),
          idCard: new FormControl(customer.idCard,[Validators.required,Validators.pattern('^\\d{9}$')]),
          phone: new FormControl(customer.phone,[Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[0-9]{7}$')]),
          email: new FormControl(customer.email,[Validators.required, Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}")]),
          typeCustomer: new FormControl(customer.typeCustomer,[Validators.required]),
          address: new FormControl(customer.address,[Validators.required]),

        })
    });
  }

  updateCustomer(id:number){
  const customer=this.formEdit.value;
  this.serviceCustomer.updateCustomer(id,customer).subscribe(()=>{
    this.router.navigateByUrl('list-customer');
  });


  }

}
