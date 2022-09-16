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
    this.id = this.activatedRoute.snapshot.params.id;
    this.getProduct(this.id);
    // this.activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
    //   this.id = this.activatedRoute.snapshot.params.id;
    //   // this.id=+paramMap.get('id');
    //
    //   // this.productForm=new FormGroup({
    //   //   id: new FormControl(product.id),
    //   //   name: new FormControl(product.name),
    //   //   price: new FormControl(product.price),
    //   //   description: new FormControl(product.description),
    //   // });
    // });
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
          catelogy:new FormControl(product.catelogy)
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
  // compareObjects(o1: any, o2: any) {
  //   if(o1.nameCate == o2.nameCate && o1.id == o2.id )
  //     return true;
  //   else return false
  // }
  compareFn(c1: Catelogy, c2: Catelogy): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
