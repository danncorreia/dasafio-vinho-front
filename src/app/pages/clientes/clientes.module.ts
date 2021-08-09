import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesPageRoutingModule } from './clientes-routing.module';

import { ClientesPage } from './clientes.page';
import { GridClientsComponent } from './components/grid-clients/grid-clients.component';
import { FiltrosComponent } from './components/filtros/filtros.component';

const components = [
  ClientesPage,
  GridClientsComponent,
  FiltrosComponent
];

const modules = [
  ReactiveFormsModule
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesPageRoutingModule,
    ...modules
  ],
  exports:[...modules],
  declarations: [...components],
  entryComponents:[...components]
})
export class ClientesPageModule {}
