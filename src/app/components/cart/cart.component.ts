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

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getItem();
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
    });
  }

}
