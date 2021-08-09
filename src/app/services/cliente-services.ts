import { Injectable } from '@angular/core';
import { ClienteController } from '../controllers/cliente-controller';
import { ClienteModel } from '../models/cliente-model';
import { LoaderServices } from './loader-services';

@Injectable({
  providedIn: 'root'
})
export class ClienteServices {
  constructor(
    private clienteController: ClienteController,
    private loaderServices: LoaderServices
  ) {}

  async getClientes(filtro): Promise<Array<ClienteModel>> {
    this.loaderServices.show();
    return this.clienteController.getClientes(filtro).finally(() => this.loaderServices.dismiss());
  }

  async getClienteMaiorCompraPorAno(ano): Promise<ClienteModel> {
    this.loaderServices.show();
    return this.clienteController.getClienteMaiorCompraPorAno(ano).finally(() => this.loaderServices.dismiss());
  }
}
