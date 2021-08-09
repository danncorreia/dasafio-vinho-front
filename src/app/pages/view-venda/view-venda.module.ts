import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewVendaPageRoutingModule } from './view-venda-routing.module';

import { ViewVendaPage } from './view-venda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewVendaPageRoutingModule
  ],
  declarations: [ViewVendaPage]
})
export class ViewVendaPageModule {}
