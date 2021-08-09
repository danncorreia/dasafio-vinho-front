import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { VendaModel } from 'src/app/models/venda-model';
import { ViewVendaPage } from 'src/app/pages/view-venda/view-venda.page';
import { VendaServices } from 'src/app/services/venda-services';

@Component({
  selector: 'app-grid-vendas',
  templateUrl: './grid-vendas.component.html',
  styleUrls: ['./grid-vendas.component.scss'],
})
export class GridVendasComponent implements OnInit {


  vendas: Array<VendaModel>;

  constructor(
    private alertController: AlertController,
    private vendaServices: VendaServices,
    public modalController: ModalController
    ) { }

  async ngOnInit() {
    this.vendas = await this.vendaServices.getVendas();
  }

  async presentModal(venda: VendaModel = null) {
    const modal = await this.modalController.create({
      component: ViewVendaPage,
      componentProps: {venda}
    });
    return await modal.present();
  }


}
