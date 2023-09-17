import { Injectable } from '@angular/core';
import { CartItemModel } from '../models/cart-item-model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  existsCart(): boolean {
    return localStorage.getItem('cart') != null;
  }

  setCart(cart: CartItemModel[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCart(): CartItemModel[] {
    const cartData = localStorage.getItem('cart');
    if (cartData !== null) {
      return JSON.parse(cartData);
    } else {
      // Manejar el caso en el que no se encuentra el valor 'cart' en localStorage
      return []; // Por ejemplo, puedes devolver un arreglo vacío o un valor predeterminado
    }
  }

  clear(): void {
    localStorage.removeItem('cart');
  }
}
