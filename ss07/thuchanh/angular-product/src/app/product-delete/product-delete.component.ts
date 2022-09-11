// import { Component, OnInit } from '@angular/core';
// import {FormControl, FormGroup} from "@angular/forms";
// import {ServiceService} from "../service/service.service";
// import {ActivatedRoute, ParamMap, Router} from "@angular/router";
//
// @Component({
//   selector: 'app-product-delete',
//   templateUrl: './product-delete.component.html',
//   styleUrls: ['./product-delete.component.css']
// })
// export class ProductDeleteComponent implements OnInit {
//   displayStyle = "none";
//   formDelete:FormGroup;
//   id:number;
//   constructor(private productService:ServiceService,private activatedRoute:ActivatedRoute,
//               private router:Router) {
//
//   }
//
//   ngOnInit(): void {
//   }
//   getProduct(id:number){
//     return this.productService.findById(id);
//   }
//
//
//
//   delete(id: number) {
//     this.productService.deleteProduct(id);
//     this.router.navigate(['/product/list']);
//   }
//
// }
