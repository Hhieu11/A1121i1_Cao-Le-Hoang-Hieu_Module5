import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServiceService} from "../service/service.service";
import {Product} from "../model/product";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Catelogy} from "../model/catelogy";
import {CatelogyService} from "../service/catelogy.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  products:Product[]=[];
  product:Product[]
  deleteProduct:Product={};
  cate:Catelogy[]=[];

  formDelete:FormGroup;
  id:number;
  p: number=1;

  constructor( private productService:ServiceService,
              private activatedRoute:ActivatedRoute,
              private router:Router,
               private catelogyService:CatelogyService) {
    this.getAllCate();

    // this.activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
    //   this.id=+paramMap.get('id');
    //   this.sendProductToDelete(this.id);
    //
    // })

  }

  ngOnInit(): void {
    this.getAll();
  }
  getAllCate(){
    this.catelogyService.getAll().subscribe(data => {
      this.cate = data;
      console.log(this.cate)
    });
  }

  getAll(){
    this.productService.getAll().subscribe(
      (data)=>{
        this.products=data;
      }
    )
  }
  sendProductToDelete(product:Product){
  this.deleteProduct=product;
  }



  delete() {
    this.productService.deleteProduct(this.deleteProduct.id).subscribe(() => {
      this.ngOnInit();
    });
  }
  searchName(name:string){
this.productService.search(name).subscribe((data)=>{
this.products=data;

})
  }


}
