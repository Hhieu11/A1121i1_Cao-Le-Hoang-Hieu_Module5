import { Component, OnInit } from '@angular/core';
import {Contract} from '../contract';
import {Customer} from '../customer';
import {ContractService} from '../service/contract.service';
import {CustomerService} from '../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contract:Contract[]=[];
  customer:Customer[]=[];
  deleteCont:Contract={
    customer:{}
  };


  constructor( private contractService:ContractService,
               private customerService:CustomerService,
               private activatedRoute:ActivatedRoute,
               private router:Router,
               private fb: FormBuilder) {
    this.getAllCus();
  }

  ngOnInit(): void {
    this.getAllContract();
  }
  getAllCus(){
  this.customerService.getAllCustomer().subscribe((data)=>{
  this.customer=data;
  });
  }
  getAllContract(){
this.contractService.getAll().subscribe((data)=>{
  this.contract=data;
});
  }

  sendContToDelete(contract:Contract){
    this.deleteCont=contract;
  }

  delete() {
    this.contractService.deleteProduct(this.deleteCont.id).subscribe(() => {
      this.ngOnInit();
    });
  }


}
