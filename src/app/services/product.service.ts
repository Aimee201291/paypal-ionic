import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product [] = [
    new Product(1, 'Pepsi 2 LT', 'Bebida Carbonatada sabor a Cola Negra', 2.52, 'https://locatelvenezuela.vtexassets.com/arquivos/ids/163736-800-auto?v=637744094582700000&width=800&height=auto&aspect=true'),
    new Product(2, 'Frescolita 2LT', 'Refresco sabor a colita sin azúcar', 1.81, 'https://locatelvenezuela.vtexassets.com/arquivos/ids/178846-1600-auto?v=638294324373530000&width=1600&height=auto&aspect=true'),
    new Product(3, 'Chinotto 2LT', 'Chinotto Sin Calorías  Bebida Gaseosa libre de Calorias sabor a limón', 1.81, 'https://locatelvenezuela.vtexassets.com/arquivos/ids/178777-800-auto?v=638289965972570000&width=800&height=auto&aspect=true'),
    new Product(4, 'Coca-cola 2LT', 'Bebida gaseosa con sabor a cola negra sin calorías, ideal para compartir en cada ocasión', 1.42, 'https://locatelvenezuela.vtexassets.com/arquivos/ids/178766-800-auto?v=638289953761670000&width=800&height=auto&aspect=true')
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
