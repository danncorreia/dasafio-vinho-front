import { Injectable } from '@angular/core';
import { VendaController } from '../controllers/venda-controller';
import { VendaModel } from '../models/venda-model';
import { LoaderServices } from './loader-services';

@Injectable({
  providedIn: 'root'
})
export class VendaServices {
  constructor(
    private vendaController: VendaController,
    private loaderServices: LoaderServices,
  ) {}

  async getVendas(): Promise<Array<VendaModel>> {
    this.loaderServices.show();
    return this.vendaController.getVendas().finally(() => this.loaderServices.dismiss());
  }
}
