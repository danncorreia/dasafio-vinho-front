import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VendaModel } from '../models/venda-model';

@Injectable({
  providedIn: 'root'
})
export class VendaController {

  api = 'http://localhost:3000/venda';

  constructor(private http: HttpClient) {}

  async getVendas(): Promise<Array<VendaModel>> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": 'application/json' }),
      params: {}
    };

    return new Promise((resolve, reject) => {
      this.http.get(this.api, httpOptions)
        .subscribe(res => {
          resolve((res as Array<VendaModel>));
        }, (err) => {
          reject(err);
        });
    });
  }
}
