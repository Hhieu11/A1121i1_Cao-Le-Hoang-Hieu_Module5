import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products:Product[]=[];
category:Category[]=[]
  searchForm:FormGroup;
  p: number=1;

  constructor( private productService:ProductService,
               private categoryService:CategoryService,
               private activatedRoute:ActivatedRoute,
               private router:Router,
               private fb: FormBuilder) {
    this.getAllCate();

    this.searchForm = this.fb.group({
      nameProduct: '',
      categoryId: ''

    })
  }

  ngOnInit(): void {
    this.getAllProduct();

  }
  getAllCate() {
    this.categoryService.getAll().subscribe(data => {
      this.category = data;
    });
  }
  getAllProduct(){
    this.productService.getAll().subscribe(
      (data)=>{
        this.products=data;
      }
    )
  }

  searchName(name:string){
    this.productService.search(name).subscribe((data)=>{
      this.products=data;
      this.p=1;

    })
  }

  search2() {
    // const check = this.searchForm.value;
    this.productService.search2(this.searchForm.get('nameProduct').value,this.searchForm.get('categoryId').value).subscribe(products => this.products = products);

  }

}
