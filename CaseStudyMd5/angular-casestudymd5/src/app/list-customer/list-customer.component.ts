import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {CustomerDao} from '../Dao/CustomerDao';
import {CustomerService} from '../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customer: Customer[] = []
  p: number = 1;
  deleteCus: Customer = {};


  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
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

  delete() {
    this.customerService.deleteCustomer(this.deleteCus.id).subscribe(() => {
      this.ngOnInit();
    });

  }
}
