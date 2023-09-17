import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare global {
  interface Window {
    paypal: any, // Puedes reemplazar 'any' con el tipo correcto si lo conoces
  }
}
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  paymentAmount: string = '3.00';
  currency: string = 'USD';
  currencyIcon: string = '$';
  constructor() {
    let _this = this;
    setTimeout(() => {
      // Render the PayPal button into #paypal-button-container
      <any>window['paypal'].Buttons({

        // Set up the transaction
        createOrder: function (data: any, actions: any) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: _this.paymentAmount
              }
            }]
          });
        },

        // Finalize the transaction
        onApprove: function (data: any, actions: any) {
          return actions.order.capture()
            .then(function (details: any) {
              // Show a success message to the buyer
              alert('Transaction completed by ' + details.payer.name.given_name + '!');
            })
            .catch((err: any) => {
              console.log(err);
            })
        }
      }).render('#paypal-button-container');
    }, 500)
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
