import {Catelogy} from "./catelogy";

export interface Product {
  id?: number;
  name?: string;
  price?: number;
  description?: string;
  catelogy?:Catelogy;
}
