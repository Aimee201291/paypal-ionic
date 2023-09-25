import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  implements OnInit {

  @Input() amount!: any;
  @Input() items!: any;

  constructor(
    public activeModal: NgbActiveModal,
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }

}
