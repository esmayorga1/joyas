import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/products.service';
import {Products} from '../../../products'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Products[] = [];

  constructor(private productsService: ProductsService) {
    
  }
 
  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
    console.log(this.products);
 
  }

  



  // products = [
  //   {
  //     id: '1',
  //     name:'Joya 1',
  //     imgUrl:'/assets/img/products/prueba.jpg',
  //     price: 500,
  //     description: 'Aqui se encuentra la descripcion del producto 1'
  //   },
  //   {
  //     id: '2',
  //     name:'Joya 2',
  //     imgUrl:'/assets/img/products/prueba.jpg',
  //     price: 500,
  //     description: 'Aqui se encuentra la descripcion del producto 2'
  //   }   
  // ]
  

}
