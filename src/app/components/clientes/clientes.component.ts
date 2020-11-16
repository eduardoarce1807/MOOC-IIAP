import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';

import { Categoria } from '../../Clases/categoria';
 
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  categorias: Categoria[]

  constructor( private categoriaService: CategoriaService ) { }

  ngOnInit(): void { 

    this.categoriaService.getCategorias().subscribe(
      categoria => this.categorias = categoria
    );

  }

}
