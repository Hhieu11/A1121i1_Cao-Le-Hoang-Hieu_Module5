import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServiceListComponent} from './service-list/service-list.component';
import {CreateServiceComponent} from './create-service/create-service.component';
import {EditServiceComponent} from './edit-service/edit-service.component';
import {ListCustomerComponent} from './list-customer/list-customer.component';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {EditCustomerComponent} from './edit-customer/edit-customer.component';
import {ContractListComponent} from './contract-list/contract-list.component';


const routes: Routes = [
  { path: '', pathMatch:'full',component:ServiceListComponent},
  {path:'service-list',component:ServiceListComponent},
  {path:'create-service',component:CreateServiceComponent},
  {path:'edit-service/:id',component:EditServiceComponent},
  {path:'list-customer',component:ListCustomerComponent},
  {path:'create-customer',component:CreateCustomerComponent},
  {path:'edit-customer/:id',component:EditCustomerComponent},
  {path:'contract-list',component:ContractListComponent},



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
