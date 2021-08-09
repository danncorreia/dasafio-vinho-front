import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VendaModel } from 'src/app/models/venda-model';

@Component({
  selector: 'app-view-venda',
  templateUrl: './view-venda.page.html',
  styleUrls: ['./view-venda.page.scss'],
})
export class ViewVendaPage implements OnInit {

  @Input() venda: VendaModel;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
