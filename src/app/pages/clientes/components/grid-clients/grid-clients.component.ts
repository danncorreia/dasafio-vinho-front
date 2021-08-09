import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { ClienteModel } from 'src/app/models/cliente-model';
import { ClienteServices } from 'src/app/services/cliente-services';

@Component({
  selector: 'app-grid-clients',
  templateUrl: './grid-clients.component.html',
  styleUrls: ['./grid-clients.component.scss'],
})
export class GridClientsComponent implements OnInit {

  @Input() filtros: FormGroup;
  clientes: Array<ClienteModel>;

  constructor(
    private alertController: AlertController,
    private clienteService: ClienteServices,
    private actionSheetController: ActionSheetController) { }

  async ngOnInit() {
    this.filtros.valueChanges.subscribe(async (value)=>this.clientes = await this.clienteService.getClientes(value.idFiltro));
    this.clientes = await this.clienteService.getClientes(this.filtros.get('idFiltro').value);
  }

  async presentAlertCliente(cliente: ClienteModel) {
    const alert = await this.alertController.create({
      cssClass: 'alert',
      header: 'Cliente',
      message: `Nome: ${cliente.nome} <br> CPF: ${cliente.cpf}`,
      buttons: ['Fechar']
    });

    await alert.present();
  }

  async presentActionSheet(cliente: ClienteModel) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opções do Cliente',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Sugerir Vinho',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Dados do Cliente',
        handler: () => {
          this.presentAlertCliente(cliente);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
  }
}
