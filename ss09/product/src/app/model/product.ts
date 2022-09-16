import {Category} from './category';

export interface Product {
  id?: number;
  nameProduct?:string;
  price?:string;
  description?:string;
  category?:Category;

}
