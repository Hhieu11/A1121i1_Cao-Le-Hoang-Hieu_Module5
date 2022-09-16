import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
    facilityId:new FormControl('',[Validators.required]),
    facilityName:new FormControl('',[Validators.required]),
    area:new FormControl('',[Validators.required]),
    cost:new FormControl('',[Validators.required]),
    maxPeople:new FormControl('',[Validators.required]),
    standardRoom:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    poolArea:new FormControl('',[Validators.required]),
    numberOfFloors:new FormControl('',[Validators.required]),
    rentType:new FormControl('',[Validators.required]),
    facilityType: new FormControl('',[Validators.required]),
  })
  }


  createService() {
  ServiceDao.faciity.push(this.serviceForm.value);
    this.serviceForm.reset();
    console.log(this.serviceForm.value);
    this.router.navigateByUrl("service-list")
  }

}
