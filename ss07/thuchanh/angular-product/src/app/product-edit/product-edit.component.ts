import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service/service.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {CatelogyService} from "../service/catelogy.service";
import {Catelogy} from "../model/catelogy";
import {Product} from "../model/product";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm:FormGroup;
  id:number;
  cate:Catelogy[]=[];
  product:Product;

  constructor(private serviceProduct:ServiceService,
              private activatedRoute:ActivatedRoute,
              private serviceCatelogy:CatelogyService,
              private router:Router) {
    this.getAllCate();
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      this.id=+paramMap.get('id');
      this.getProduct(this.id);
      // this.productForm=new FormGroup({
      //   id: new FormControl(product.id),
      //   name: new FormControl(product.name),
      //   price: new FormControl(product.price),
      //   description: new FormControl(product.description),
      // });
    });
  }

  ngOnInit(): void {

  }
  getAllCate(){
    this.serviceCatelogy.getAll().subscribe(data => {
      this.cate = data;
      console.log(this.cate)
    });
  }
  getProduct(id:number){
    return this.serviceProduct.findById(id).subscribe(product=>{
      this.productForm=new FormGroup({
          id: new FormControl(product.id),
          name: new FormControl(product.name),
          price: new FormControl(product.price),
          description: new FormControl(product.description),
          catelogy:new FormControl(product.catelogy.nameCate)
      })
    });
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.serviceProduct.updateProduct(id, product).subscribe(()=>{


    },()=>{
      console.log(product);
      },
      ()=>{
        this.router.navigateByUrl('product/list');
      }
    );

  }
}
