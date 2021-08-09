import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss'],
})
export class FiltrosComponent implements OnInit {

  @Input() group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  removerFiltro(){
    this.group.patchValue({idFiltro:0, nmFiltro:'Todos'});
  }
}
