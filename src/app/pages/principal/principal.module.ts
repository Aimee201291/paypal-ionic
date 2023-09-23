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
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxPayPalModule,
    NgxSpinnerModule,
    NgbModule,
    PrincipalPageRoutingModule
  ],
  declarations: [PrincipalPage, ProductListComponent, CartComponent, ProductItemComponent, CartItemComponent, ModalComponent],
  providers: [
    NgbActiveModal,
  ],
})
export class PrincipalPageModule {}
