import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewVendaPage } from './view-venda.page';

const routes: Routes = [
  {
    path: '',
    component: ViewVendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewVendaPageRoutingModule {}
