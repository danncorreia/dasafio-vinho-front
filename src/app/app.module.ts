import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteController } from './controllers/cliente-controller';
import { ClienteServices } from './services/cliente-services';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { VendaController } from './controllers/venda-controller';
import { VendaServices } from './services/venda-services';
import { LoaderServices } from './services/loader-services';

const providers = [
  ClienteController,
  ClienteServices,
  VendaController,
  VendaServices,
  LoaderServices
];

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ...providers],
  bootstrap: [AppComponent],
})
export class AppModule {}
