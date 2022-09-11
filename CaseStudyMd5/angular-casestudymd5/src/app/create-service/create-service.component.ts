import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ServiceDao} from '../Dao/ServiceDao';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {

  // @ts-ignore
  serviceForm:FormGroup;

  constructor(private router:Router) { }

  ngOnInit(): void {
  this.serviceForm=new FormGroup({
    facilityId:new FormControl(),
    facilityName:new FormControl(),
    area:new FormControl(),
    cost:new FormControl(),
    maxPeople:new FormControl(),
    standardRoom:new FormControl(),
    description:new FormControl(),
    poolArea:new FormControl(),
    numberOfFloors:new FormControl(),
    rentType:new FormControl(),
    facilityType: new FormControl(),
  })
  }


  createService() {
  ServiceDao.faciity.push(this.serviceForm.value);
    this.serviceForm.reset();
    console.log(this.serviceForm.value);
    this.router.navigateByUrl("service-list")
  }
}
