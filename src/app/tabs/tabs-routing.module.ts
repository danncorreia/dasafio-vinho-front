import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'clientes',
        loadChildren: () => import('../pages/clientes/clientes.module').then(m => m.ClientesPageModule)
      },
      {
        path: 'vendas',
        loadChildren: () => import('../pages/vendas/vendas.module').then(m => m.VendasPageModule)
      },
      {
        path: 'conf',
        loadChildren: () => import('../pages/configuracoes/configuracoes.module').then(m => m.ConfiguracoesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/clientes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/clientes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
