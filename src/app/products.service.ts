import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor() { }

  products = [
    {
      id: '1',
      name:'Joya 1',
      imgUrl:'/assets/img/products/prueba.jpg',
      price: 500,
      description: 'Aqui se encuentra la descripcion del producto 1'
    },
    {
      id: '2',
      name:'Joya 2',
      imgUrl:'/assets/img/products/prueba.jpg',
      price: 500,
      description: 'Aqui se encuentra la descripcion del producto 2'
    },

    {
      id: '3',
      name:'Joya 2',
      imgUrl:'/assets/img/products/prueba.jpg',
      price: 500,
      description: 'Aqui se encuentra la descripcion del producto 2'
    },
    
    {
      id: '4',
      name:'Joya 2',
      imgUrl:'/assets/img/products/prueba.jpg',
      price: 500,
      description: 'Aqui se encuentra la descripcion del producto 2'
    },

    {
      id: '5',
      name:'Joya 2',
      imgUrl:'/assets/img/products/prueba.jpg',
      price: 500,
      description: 'Aqui se encuentra la descripcion del producto 2'
    },

    {
      id: '6',
      name:'Joya 2',
      imgUrl:'/assets/img/products/prueba.jpg',
      price: 500,
      description: 'Aqui se encuentra la descripcion del producto 2'
    },

    {
      id: '7',
      name:'Joya 2',
      imgUrl:'/assets/img/products/prueba.jpg',
      price: 500,
      description: 'Aqui se encuentra la descripcion del producto 2'
    },

    {
      id: '8',
      name:'Joya 2',
      imgUrl:'/assets/img/products/prueba.jpg',
      price: 500,
      description: 'Aqui se encuentra la descripcion del producto 2'
    },
  ]
  
  
getAllProducts(){
  return this.products;
}

getProduct( id:string){
  return this.products.find(product => id === product.id);
}
}
