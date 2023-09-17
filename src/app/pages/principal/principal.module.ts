import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalPageRoutingModule } from './principal-routing.module';

import { PrincipalPage } from './principal.page';

import { ProductListComponent } from 'src/app/components/product-list/product-list.component';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { ProductItemComponent } from 'src/app/components/product-item/product-item.component';
import { CartItemComponent } from 'src/app/components/cart-item/cart-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalPageRoutingModule
  ],
  declarations: [PrincipalPage, ProductListComponent, CartComponent, ProductItemComponent, CartItemComponent]
})
export class PrincipalPageModule {}
