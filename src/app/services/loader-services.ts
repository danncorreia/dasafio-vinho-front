import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderServices {

  loading;

  constructor(
    public loadingController: LoadingController
  ) {
  }

  async show() {
    this.loading = await this.loadingController.create({
      message: 'Carregando...'
    });
    this.loading.present();
  }

  dismiss() {
    this.loading.dismiss();
  }
}
