import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Customer} from '../customer';
import {ContractService} from '../service/contract.service';
import {CustomerService} from '../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Contract} from '../contract';

@Component({
  selector: 'app-edit-contract',
  templateUrl: './edit-contract.component.html',
  styleUrls: ['./edit-contract.component.css']
})
export class EditContractComponent implements OnInit {

  contractForm:FormGroup;
  id:number;
  customer: Customer[]=[];
  // contract:Contract;

  constructor(private contractService:ContractService,
              private customerService:CustomerService,
              private activatedRoute:ActivatedRoute,
              private router:Router) {
    this.getAllCus();
    this.id = this.activatedRoute.snapshot.params.id;
    this.getContract(this.id);
  }

  ngOnInit(): void {
  }

  getContract(id:number){
  return this.contractService.findById(id).subscribe((contract)=>{
    this.contractForm= new FormGroup({
      id:new FormControl(contract.id),
      startDay:new FormControl(contract.startDay),
      endDay:new FormControl(contract.endDay),
      deposit:new FormControl(contract.deposit),
      total: new FormControl(contract.total),
      customer:new FormControl(contract.customer),
    });
  });
  }

  getAllCus(){
    this.customerService.getAllCustomer().subscribe((data)=>{
      this.customer=data;
    });
  }

  updateContract(id:number){
  const contract=this.contractForm.value;
  this.contractService.updateProduct(id,contract).subscribe(()=>{

  },()=>{
      console.log(contract);
    },
    ()=>{
      this.router.navigateByUrl('contract-list');
    })
  }
  compareFn(c1: Customer, c2: Customer): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }


}
