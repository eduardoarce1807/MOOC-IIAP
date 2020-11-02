import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';

import { Clientes } from '../clientes/clientes';
 
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Clientes[]

  constructor( private clienteService: ClienteService ) { }

  ngOnInit(): void {

    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );

  }

}
