import { ClienteModel } from './cliente-model';
import { ItemModel } from './item-model';

export class VendaModel {

  codigo: string = void(0);
  data: string = void(0);
  cliente: ClienteModel = void(0);
  itens: Array<ItemModel>;
  valorTotal: number = void(0);

  constructor(
    codigo?: string,
    data?: string,
    cliente?: ClienteModel,
    itens?: Array<ItemModel>,
    valorTotal?: number
  ){
    this.codigo = codigo;
    this.data = data;
    this.cliente = cliente;
    this.itens = itens;
    this.valorTotal = valorTotal;
  }
}
