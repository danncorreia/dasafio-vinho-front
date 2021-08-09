import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { ClienteModel } from 'src/app/models/cliente-model';
import { ClienteServices } from 'src/app/services/cliente-services';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  formGroup: FormGroup;

  clientes: Array<ClienteModel>;

  constructor(
    private alertController: AlertController,
    private clienteService: ClienteServices,
    private actionSheetController: ActionSheetController
    ) {
      this.formGroup = new FormGroup({
        idFiltro: new FormControl(0),
        nmFiltro: new FormControl('')
      });
    }

  async ngOnInit() {
  }

  async presentFiltrosPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ordernar Por:',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Ordem Alfabética',
          value: {idFiltro:0, nmFiltro:'Ordem Alfabética'},
          handler: (value) => {
            console.log(0);
            this.formGroup.patchValue(value);
          },
          checked: this.formGroup.value.idFiltro === 1?true:false
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Maior Valor Total Em Compras',
          value: {idFiltro:1, nmFiltro:'Maior Valor Total Em Compras'},
          checked: this.formGroup.value.idFiltro === 2?true:false
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Mais Fiéis',
          value: {idFiltro:3, nmFiltro:'Mais Fiéis'},
          checked: this.formGroup.value.idFiltro === 3?true:false
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Confirmar',
          handler: (value) => {
            this.formGroup.patchValue(value);
          }
        }
      ]
    });

    await alert.present();
  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opções dos Clientes',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Cliente Com Maior Compra Do Ano',
        handler: () => {
          this.clienteComMaiorCompra();
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

  async clienteComMaiorCompra() {
    const cliente = await this.clienteService.getClienteMaiorCompraPorAno(2016);

    const alert = await this.alertController.create({
      cssClass: 'alert',
      header: 'Cliente',
      message: `Nome: ${cliente.nome} <br> CPF: ${cliente.cpf}`,
      buttons: ['Fechar']
    });

    await alert.present();
  }

}
