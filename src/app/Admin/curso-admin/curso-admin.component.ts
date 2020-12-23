import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/Clases/categoria';
import { Curso } from 'src/app/Clases/curso';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CursoService } from 'src/app/services/curso.service';



declare var $: any;

@Component({
  selector: 'app-curso-admin',
  templateUrl: './curso-admin.component.html',
  styleUrls: ['./curso-admin.component.css']
})
export class CursoAdminComponent implements OnInit {

  cursos: Curso[];
  categorias: Categoria[];

  constructor(private CS: CargarScriptsService,
      private cursoService: CursoService,
      private categoriaService: CategoriaService
    ) {
    CS.CSSUser([
      "assets/css/styles.css",
      "https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css"
    ]);
  }

  ngOnInit(): void {

    $('#wrpr').removeClass('wrapper').addClass('layoutSidenav');

    $("#login").remove();
    $("#register").remove();

    $("#hdr-est").remove();
    $("#lsb-est").remove();
    $("#ftr-est").remove();

    $("#hdr-inst").remove();
    $("#lsb-inst").remove();
    $("#ftr-inst").remove();

    $("#hdr-iiap").remove();
    $("#ftr-iiap").remove();

    $("#hdr-adm").show();
    $("#lsb-adm").show();

    this.cursoService.getAll().subscribe(
      Cursos => {
        this.cursos = Cursos;
        this.categoriaService.getAll().subscribe(
          Categorias => {
            this.categorias = Categorias;
            console.log(this.categorias);
            setTimeout(function(){
              $('#cursosTable').DataTable();
            },500);
          }
        );
        console.log(this.cursos);
        
      }
    );

  }

}
