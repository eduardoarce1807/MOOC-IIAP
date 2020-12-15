import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/Clases/categoria';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CursoService } from 'src/app/services/curso.service';

import { Curso } from '../../Clases/curso';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.component.html',
  styleUrls: ['./explorar.component.css']
})
export class ExplorarComponent implements OnInit {

  cursos: Curso[];
  categorias: Categoria[];

  constructor(
    private csService: CargarScriptsService,
    private cursoService: CursoService,
    private categoriaService: CategoriaService
    ) { }

  ngOnInit(): void {

    $('#wrpr').removeClass('wrapper _bg4586').addClass('wrapper');

    $("#login").remove();
    $("#register").remove();

    $("#hdr-inst").remove();
    $("#lsb-inst").remove();
    $("#ftr-inst").remove();

    $("#hdr-iiap").remove();
    $("#ftr-iiap").remove();

    $("#hdr-est").show();
    $("#lsb-est").show();
    $("#ftr-est").show();

    this.csService.CSSUser(["assets/css/estilos.css"]);

    this.cursoService.getAll().subscribe(
      Cursos => {
        this.cursos = Cursos;
        console.log(this.cursos);
      
      }
    );

    this.categoriaService.getAll().subscribe(
      Categorias => {

        this.categorias = Categorias;

        console.log(this.categorias);

        for( var i = 0; i< this.categorias.length; i++){

          var categoriax = '<a class="category_item" title="'+this.categorias[i].ID_CATEGORIA+'">'+this.categorias[i].NOMBRE+'</a>'

          $("#cat-list").append(categoriax);



        }

        this.cargarCategorias();

      }
    );


  }

  cargarCategorias(): void {

    // AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
    $('.category_list .category_item[category="all"]').addClass('ct_item-active');
  
    // FILTRANDO PRODUCTOS  ============================================

    $('.category_item').click(function () {
      var catProduct = $(this).attr('title');
      console.log(catProduct);

      // AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
      $('.category_item').removeClass('ct_item-active');
      $(this).addClass('ct_item-active');

      // OCULTANDO PRODUCTOS =========================
      $('.product-item').css('transform', 'scale(0)');
      function hideProduct() {
        $('.product-item').hide();
      } setTimeout(hideProduct, 400);

      // MOSTRANDO PRODUCTOS =========================
      function showProduct() {
        $('.product-item[title="' + catProduct + '"]').show();
        $('.product-item[title="' + catProduct + '"]').css('transform', 'scale(1)');
      } setTimeout(showProduct, 400);
    });

    // MOSTRANDO TODOS LOS PRODUCTOS =======================

    $('.category_item[title="all"]').click(function () {
      function showAll() {
        $('.product-item').show();
        $('.product-item').css('transform', 'scale(1)');
      } setTimeout(showAll, 400);
    });

  }

}
