import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {ContractService} from '../service/contract.service';
import {CustomerService} from '../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  contractForm: FormGroup
  customer:Customer[]=[];



  constructor( private contractService:ContractService,
               private customerService:CustomerService,
               private activatedRoute:ActivatedRoute,
               private router:Router) {
    this.getAllCus();
  }

  ngOnInit(): void {
  this.contractForm= new FormGroup({
    id:new FormControl(),
    startDay:new FormControl(),
    endDay:new FormControl(),
    deposit:new FormControl(),
    total: new FormControl(),
    customer:new FormControl(),

  });
  }

  submit(){
    const contract=this.contractForm.value;
this.contractService.saveContract(contract).subscribe(()=>{
  this.contractForm.reset();
this.router.navigateByUrl("contract-list")
})
  }

  getAllCus(){
    this.customerService.getAllCustomer().subscribe((data)=>{
      this.customer=data;
    });
  }


}
