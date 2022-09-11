import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerService} from '../service/customer.service';
import {FormControl, FormGroup} from '@angular/forms';

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
      // this.formedit=new FormGroup({
      //   idCustomer: new FormControl(customer.idCustomer),
      //   nameCustomer: new FormControl(customer.nameCustomer),
      //   date: new FormControl(customer.date),
      //   gender: new FormControl(customer.gender),
      //   idCard: new FormControl(customer.idCard),
      //   phone: new FormControl(customer.phone),
      //   email: new FormControl(customer.email),
      //   typeCustomer: new FormControl(customer.typeCustomer),
      //   address: new FormControl(customer.address),
      //
      // });
    });

  }

  ngOnInit(): void {
  }
  getCustomer(id:number){
    return this.serviceCustomer.findById(id).subscribe((customer)=>{
      this.formEdit=new FormGroup({
          id: new FormControl(customer.id),
          nameCustomer: new FormControl(customer.nameCustomer),
          date: new FormControl(customer.date),
          gender: new FormControl(customer.gender),
          idCard: new FormControl(customer.idCard),
          phone: new FormControl(customer.phone),
          email: new FormControl(customer.email),
          typeCustomer: new FormControl(customer.typeCustomer),
          address: new FormControl(customer.address),

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
