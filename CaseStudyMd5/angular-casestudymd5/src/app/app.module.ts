import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeadComponent } from './head/head.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ContractComponent } from './contract/contract.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HeaderComponent,
    FooterComponent,
    ServiceListComponent,
    EditServiceComponent,
    CreateServiceComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    CreateCustomerComponent,
    ContractComponent,
    ContractListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
      FormsModule,
        ReactiveFormsModule,
      RouterModule,
      HttpClientModule,
      // NgxPaginationModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
