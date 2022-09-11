import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service/service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CatelogyService} from "../service/catelogy.service";
import {Catelogy} from "../model/catelogy";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm:FormGroup;
  cate:Catelogy[]=[];

  constructor(private productService:ServiceService,
              private router:Router,
              private catelogyService:CatelogyService) {
    this.getAllCate();
  }



  ngOnInit(): void {
    this.productForm=new FormGroup({
      id: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required,Validators.minLength(6)]),
      price: new FormControl('',[Validators.required,Validators.maxLength(10)]),
      description: new FormControl('',[Validators.required,Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}")]),
      catelogy:new FormControl('',[Validators.required])

    })

  }
  submit(){
    const product=this.productForm.value;
    this.productService.saveProduct(product).subscribe(()=>{
      this.productForm.reset();
      this.router.navigateByUrl("product/list");
    })

  }
  getAllCate(){
    this.catelogyService.getAll().subscribe(data => {
      this.cate = data;
      console.log(this.cate)
    });

  }

}
