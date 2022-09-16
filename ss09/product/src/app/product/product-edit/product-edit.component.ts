import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../model/category';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
productForm:FormGroup;
id:number;
category:Category[]=[];

  constructor(private productService:ProductService,
              private categoryService:CategoryService,
              private activatedRoute:ActivatedRoute,
              private router:Router) {
    this.getAllCate();
    this.id = this.activatedRoute.snapshot.params.id;
    this.getProduct(this.id);
  }

  ngOnInit(): void {
  }

  getAllCate(){
    this.categoryService.getAll().subscribe(data => {
      this.category = data;

    });
  }

  getProduct(id:number){
    return this.productService.findById(id).subscribe(product=>{
      this.productForm=new FormGroup({
        id: new FormControl(product.id),
        nameProduct: new FormControl(product.nameProduct),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
        category:new FormControl(product.category)
      })
    });
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product).subscribe(()=>{


      },()=>{
        console.log(product);
      },
      ()=>{
        this.router.navigateByUrl('list');
      }
    );
  }

  compareFn(c1: Category, c2: Category): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

}
