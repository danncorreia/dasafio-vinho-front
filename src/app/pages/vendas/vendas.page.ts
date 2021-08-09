import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.page.html',
  styleUrls: ['./vendas.page.scss'],
})
export class VendasPage implements OnInit {

  formGroup: FormGroup;

  constructor(
    private alertController: AlertController
    ) { }

  ngOnInit() {
  }


  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ordernar Por:',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Todos',
          value: {idFiltro:0, nmFiltro:'Todos'},
          handler: (value) => {
            console.log(0);
            this.formGroup.patchValue(value);
          },
          checked: this.formGroup.value.idFiltro === 0?true:false
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Maior Valor Total Em Compras',
          value: {idFiltro:1, nmFiltro:'Maior Valor Total Em Compras'},
          checked: this.formGroup.value.idFiltro === 1?true:false
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Maior Compra Única Ultimo Ano',
          value: {idFiltro:2, nmFiltro:'Maior Compra Única Ultimo Ano'},
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
}
