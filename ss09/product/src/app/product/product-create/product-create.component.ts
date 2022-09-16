import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../model/category';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
productForm:FormGroup;
category:Category[]=[];

  constructor(private productService:ProductService,
              private categoryService:CategoryService,
              private router:Router) {
    this.getAllCate();
  }

  ngOnInit(): void {
    this.productForm=new FormGroup({
      id: new FormControl('',[Validators.required]),
      nameProduct: new FormControl('',[Validators.required,Validators.minLength(6)]),
      price: new FormControl('',[Validators.required,Validators.maxLength(10)]),
      description: new FormControl('',[Validators.required,Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}")]),
      category:new FormControl('',[Validators.required])

    });
  }
  getAllCate(){
    this.categoryService.getAll().subscribe(data => {
      this.category = data;
      console.log(this.category)
    });

  }
  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(() => {
      this.productForm.reset();
      this.router.navigateByUrl("list");
    });
  }

}
