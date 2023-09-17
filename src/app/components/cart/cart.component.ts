import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { Product } from 'src/app/models/product';
import { CartItemModel } from 'src/app/models/cart-item-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent  implements OnInit {

  cartItems: any = [];
  total = 0;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getItem();
    this.total = this.getTotal();
  }

  getItem(): void {
    this.messageService.getMessage().subscribe((product: Product) => {
      let exists = false;
      this.cartItems.forEach((item: { productId: number; qty: number; }) => {
        if (item.productId === product.id) {
          exists = true;
          item.qty++;
        }
      });
      if (!exists) {
        const cartItem = new CartItemModel(product);
        this.cartItems.push(cartItem);
      }
      this.total = this.getTotal();
    });
  }

  getTotal(): number {
    let total = 0;
    this.cartItems.forEach((item: { qty: number; productPrice: number; }) => {
      total += item.qty * item.productPrice;
    });
    return +total.toFixed(2);
  }

  emptyCart(): void {
    this.cartItems = [];
    this.total = 0;
    //this.storageService.clear();
  }

  deleteItem(i: number): void {
    if (this.cartItems[i].qty > 1) {
      this.cartItems[i].qty--;
    } else {
      this.cartItems.splice(i, 1);
    }
    this.total = this.getTotal();
    //this.storageService.setCart(this.cartItems);
  }

}
