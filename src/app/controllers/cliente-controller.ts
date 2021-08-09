import { Injectable } from '@angular/core';
import { ClienteModel } from '../models/cliente-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteController {

  api = 'http://localhost:3000/cliente';

  constructor(private http: HttpClient) { }

  async getClientes(filtro): Promise<Array<ClienteModel>> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": 'application/json' }),
      params: {filtro}
    };

    return new Promise((resolve, reject) => {
      this.http.get(this.api, httpOptions)
        .subscribe(res => {
          resolve((res as Array<ClienteModel>));
        }, (err) => {
          reject(err);
        });
    });
  }

  async getClienteMaiorCompraPorAno(ano): Promise<ClienteModel> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": 'application/json' }),
      params: {ano}
    };

    return new Promise((resolve, reject) => {
      this.http.get(this.api+"/clienteMaiorCompra", httpOptions)
        .subscribe(res => {
          resolve((res as ClienteModel));
        }, (err) => {
          reject(err);
        });
    });
  }
}
