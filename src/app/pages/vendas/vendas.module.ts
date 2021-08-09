import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendasPageRoutingModule } from './vendas-routing.module';

import { VendasPage } from './vendas.page';
import { GridVendasComponent } from './components/grid-vendas/grid-vendas.component';

const components = [
  VendasPage,
  GridVendasComponent
];

const modules = [
  ReactiveFormsModule
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendasPageRoutingModule,
    ...modules
  ],
  exports:[...modules],
  declarations: [...components],
  entryComponents:[...components]
})
export class VendasPageModule {}
