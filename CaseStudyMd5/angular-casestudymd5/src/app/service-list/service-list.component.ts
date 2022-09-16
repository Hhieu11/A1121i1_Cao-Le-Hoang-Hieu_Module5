import { Component, OnInit } from '@angular/core';
import {Facility} from '../facility';
import {ServiceDao} from '../Dao/ServiceDao';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  page: number = 1;
  faciliti:Facility[]=ServiceDao.getAllListService();
  constructor() { }

  ngOnInit(): void {
  }

}
