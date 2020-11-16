import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';

import { Categoria } from '../../Clases/categoria';
 
@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  categorias: Categoria[]

  constructor( private categoriaService: CategoriaService ) { }

  ngOnInit(): void {

    this.categoriaService.getCategorias().subscribe(
      categorias => this.categorias = categorias
    );

  }

}