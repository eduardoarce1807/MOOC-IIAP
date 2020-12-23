import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';
import { CursoService } from 'src/app/services/curso.service';
import { Router, ActivatedRoute } from '@angular/router';

import { CursoLow } from '../../Clases/LowCase/cursoLow';
import { ModuloLow } from 'src/app/Clases/LowCase/moduloLow';
import { SesionLow } from 'src/app/Clases/LowCase/sesionLow';
import { Rec_ApLow } from 'src/app/Clases/LowCase/rec_apLow';
import { Categoria } from 'src/app/Clases/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { UsuCurService } from 'src/app/services/usu-cur.service';
import { UsuCurLow } from 'src/app/Clases/LowCase/usu_curLow';
import { Curso } from 'src/app/Clases/curso';
import { ModuloService } from 'src/app/services/modulo.service';
import { Modulo } from 'src/app/Clases/modulo';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Sesion } from 'src/app/Clases/sesion';
import { SesionService } from 'src/app/services/sesion.service';
import { RecApService } from 'src/app/services/rec-ap.service';
import { Rec_Ap } from 'src/app/Clases/rec_ap';
import { PreguntaLow } from 'src/app/Clases/LowCase/preguntaLow';
import { AlternativaLow } from 'src/app/Clases/LowCase/alternativaLow';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  cursoLow: CursoLow = new CursoLow();
  curso: Curso = new Curso();
  modulo: Modulo = new Modulo();
  sesion: Sesion = new Sesion();
  moduloLow: ModuloLow = new ModuloLow();
  sesionLow: SesionLow = new SesionLow();
  rec_apLow: Rec_ApLow = new Rec_ApLow();
  usu_curLow: UsuCurLow = new UsuCurLow();

  modulos: Modulo[];
  sesiones: Sesion[];
  sesionesPorModulo: Sesion[];
  recs_apPorSesion: Rec_Ap[];

  preguntasLow: PreguntaLow[];
  alternativasLow: AlternativaLow[];

  usuA: any;

  categorias: Categoria[];

  constructor(
    CS: CargarScriptsService,
    private cursoService: CursoService,
    private categoriaService: CategoriaService,
    private usuCurService: UsuCurService,
    private moduloService: ModuloService,
    private sesionService: SesionService,
    private rec_apService: RecApService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    CS.CSSUser1(["assets/css/jquery-steps.css"]);
    CS.JSTabla(["assets/js/tablas-curso.js"]);
    // CS.CSSURL("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css",
    // "sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1", "bootstrapURL");
  }

  ngOnInit(): void {

    this.cargar();

    $("#btn-act-mod").hide();
    $("#btn-act-ses").hide();
    $("#btn-act-rec-ap").hide();

    this.categoriaService.getAll().subscribe(
      Categorias => {
        this.categorias = Categorias;
      }
    );


  }

  crearPregunta(): void {
    var preg: PreguntaLow = new PreguntaLow();

    preg.nombre = $("#preg").val();


  }

  crearCurso(): void {

    var titulo = $("#curso_titulo").val();
    var subtitulo = $("#curso_subtitulo").val();
    var objetivo = $("#curso_objetivo").val();
    var certificacion_tit = $("#curso_certificacion_tit").val();
    var certificadora = $("#curso_certificadora").val();
    var certificadora_2 = $("#curso_certificadora_2").val();
    var id_categoria = +$("#curso_categoria").val();
    var url = $("#curso_url").val();
    var precio = +$("#curso_precio").val();
    var ruta_img = $("#curso_img").val();
    var ruta_vid = $("#curso_vid").val();


    if (
      titulo == "" ||
      objetivo == "" ||
      certificacion_tit == "" ||
      certificadora == "" ||
      id_categoria == 0 ||
      url == "" ||
      ruta_img == "" ||
      ruta_vid == ""
    ) {
      alert("Por favor, complete todos los campos obligatorios.");
    } else {

      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      var todax = yyyy + '-' + mm + '-' + dd;
      console.log(todax);

      this.cursoLow.id_categoria_fk = +$("#curso_categoria").val();
      this.cursoLow.fecha_creacion = todax;

      if ($("#pago_boolean").val() == '1') {
        this.cursoLow.precio = +$("#curso_precio").val();
      }

      console.log(this.cursoLow);

      var uActivo: any = localStorage.getItem("uActivo"); //Obtener datos de localStorage
      uActivo = JSON.parse(uActivo); // Covertir a objeto
      if (uActivo === null) {// Si no existe, creamos un array vacio.
        uActivo = []; // es es un  array
      } else {
        this.usuA = JSON.parse(uActivo[0]);

        this.cursoService.create(this.cursoLow).subscribe(
          Response => {
            this.cursoService.getByUrl(this.cursoLow.url).subscribe(
              CursoO => {
                this.curso = CursoO['CURSOS'][0];
                console.log(this.cursoLow);
                this.usu_curLow.id_curso_fk = this.curso.ID_CURSO;
                this.usu_curLow.id_usuario_fk = this.usuA.id_usuario;
                console.log(this.usu_curLow);
                this.usuCurService.create(this.usu_curLow).subscribe(
                  Response => {
                    console.log("Creado todo pa");
                  }
                );
              }
            );
          }
        );


      }
    }

  }

  //////////////////MODULOS////////////////////////

  editarModulo(modulo: Modulo): void {
    $("#titulo_modulo").val(modulo.TITULO);
    $("#desc_modulo").val(modulo.DESCRIPCION);
    this.moduloLow.id_modulo = modulo.ID_MODULO;
    this.moduloLow.titulo = modulo.TITULO;
    this.moduloLow.descripcion = modulo.DESCRIPCION;
    this.moduloLow.id_curso_fk = modulo.ID_CURSO_FK;
    
    $("#btn-act-mod").show();
    $("#btn-sav-mod").hide();
    console.log(this.moduloLow);
  }

  eliminarModulo(modulo: Modulo): void {
    this.moduloService.delete(modulo.ID_MODULO).subscribe(
      Response => {
        this.listarModulos();
      }
    );
  }

  actualizarModulo(): void{
    this.moduloService.update(this.moduloLow).subscribe(
      Response => {
        this.listarModulos();
        $("#titulo_modulo").val("");
        $("#desc_modulo").val("");
        $("#btn-act-mod").hide();
        $("#btn-sav-mod").show();
      }
    );
  }

  listarModulos(): void {
    this.moduloService.getByCursoId(this.curso.ID_CURSO).subscribe(
      Modulos => {
        this.modulos = Modulos['MODULOS'];
        console.log(this.modulos);
      }
    );
  }

  crearModulo(): void {

    this.curso = {
      "ID_CURSO": 3,
      "TITULO": "CURSO DE PRUEBAAAA XD",
      "SUBTITULO": null,
      "PRECIO": 0,
      "RUTA_IMG": "https://firebasestorage.googleapis.com/v0/b/mooc-iiap2020.appspot.com/o/curso-hor.svg?alt=media&token=ff4acd24-8930-4f30-822b-fff08ce87f39",
      "RUTA_VID": "https://www.youtube.com/watch?v=X8avbciUP3c",
      "URL": "url123",
      "DURACION": 120,
      "CERTIFICACION_TIT": "tedasd",
      "CERTIFICADORA": "cert",
      "CERTIFICADORA_2": null,
      "OBJETIVO": "obj",
      "PERFIL_PARTICIPANTE": null,
      "METODOLOGIA": null,
      "COMPETENCIAS": null,
      "FECHA_CREACION": "2020-12-22T05:00:00.000+00:00",
      "ESTADO": "1",
      "ID_CATEGORIA_FK": 1
  }

    if (jQuery.isEmptyObject(this.curso)) {
      alert("Complete la informacion general del curso, primero.");
    } else {
      this.moduloLow.id_curso_fk = this.curso.ID_CURSO;

      this.moduloService.create(this.moduloLow).subscribe(
        Response => {

          this.listarModulos();
          $("#titulo_modulo").val("");
          $("#desc_modulo").val("");

        }
      );
    }

  }

  /////////////////SESIONES////////////////////////

  editarSesion(sesion: Sesion): void {
    $("#titulo_sesion").val(sesion.TITULO);
    $("#desc_sesion").val(sesion.DESCRIPCION);
    this.sesionLow.id_sesion = sesion.ID_SESION;
    this.sesionLow.titulo = sesion.TITULO;
    this.sesionLow.descripcion = sesion.DESCRIPCION;
    this.sesionLow.id_modulo_fk = sesion.ID_MODULO_FK;
    
    $("#btn-act-ses").show();
    $("#btn-sav-ses").hide();
    console.log(this.sesionLow);
  }

  eliminarSesion(sesion: Sesion): void {
    this.sesionService.delete(sesion.ID_SESION).subscribe(
      Response => {
        this.listarSesiones();
      }
    );
  }

  actualizarSesion(): void {
    this.sesionService.update(this.sesionLow).subscribe(
      Response => {
        this.listarSesiones();
        $("#titulo_sesion").val("");
        $("#desc_sesion").val("");
        $("#btn-act-ses").show();
        $("#btn-sav-ses").hide();
      }
    );
  }

  listarSesiones(): void {

    this.sesionService.getByModuloId(+$("#list-mod").val()).subscribe(
      Sesiones => {
        this.sesionesPorModulo = Sesiones['SESIONES'];
        console.log(this.sesionesPorModulo);
        this.sesionService.getByCursoId(this.curso.ID_CURSO).subscribe(
          Sesiones => {
            this.sesiones = Sesiones['SESIONES'];
            console.log(this.sesiones);
          }
        );
      }
    );
    
  }

  crearSesion(): void {

    console.log(+$("#mod_select").val());

    if (jQuery.isEmptyObject(this.curso)) {
      alert("Complete la informacion general del curso, primero.");
    } else {
      if(this.modulos.length == 0){
        alert("Registre algún módulo, primero.");
      }else{
        this.moduloService.get(+$("#mod_select").val()).subscribe(
          Modulo => {
            this.modulo = Modulo['MODULOS'][0];
            console.log(this.modulo);
            this.sesionLow.id_modulo_fk = this.modulo.ID_MODULO;
            this.sesionService.create(this.sesionLow).subscribe(
              Response => {
                this.listarSesiones();
                $("#titulo_sesion").val("");
                $("#desc_sesion").val("");
                $("#mod_select").val("");
              }
            );
          }
        );
      }
    }

  }

  //////////////////RECS_AP//////////////////////

  editarRec_Ap(rec_ap: Rec_Ap): void {
    $("#titulo_sesion").val(rec_ap.TITULO);

    if(+$("#sel-tip-rec-ap").val() == 1 || +$("#sel-tip-rec-ap").val() == 2){
      this.rec_apLow.id_rec_ap = rec_ap.ID_REC_AP;
      this.rec_apLow.titulo = rec_ap.TITULO;
      this.rec_apLow.url = rec_ap.URL;
      this.rec_apLow.id_sesion_fk = rec_ap.ID_SESION_FK;
      this.rec_apLow.id_tipo_rec_ap_fk = rec_ap.ID_TIPO_REC_AP_FK;
    } else if (+$("#sel-tip-rec-ap").val() == 3){
      this.rec_apLow.id_rec_ap = rec_ap.ID_REC_AP;
      this.rec_apLow.titulo = rec_ap.TITULO;
      this.rec_apLow.id_sesion_fk = rec_ap.ID_SESION_FK;
      this.rec_apLow.id_tipo_rec_ap_fk = rec_ap.ID_TIPO_REC_AP_FK;
    }
    $("#btn-act-rec-ap").show();
    $("#btn-sav-rec-ap").hide();
    console.log(this.rec_apLow);
  }

  eliminarRec_Ap(rec_ap: Rec_Ap): void {
    this.rec_apService.delete(rec_ap.ID_REC_AP).subscribe(
      Response => {
        this.listarRecs_Ap();
      }
    );
  }

  actualizarRec_Ap(): void {
    this.rec_apService.update(this.rec_apLow).subscribe(
      Response => {
        this.listarSesiones();
        $("#titulo_recurso").val("");
        $("#sel-tip-rec-ap").val("");
        $("#btn-act-rec-ap").show();
        $("#btn-sav-rec-ap").hide();
      }
    );
  }

  listarRecs_Ap(): void{
  
    this.rec_apService.getBySesionId(+$("#list-ses").val()).subscribe(
      Recs_Ap => {
        this.recs_apPorSesion = Recs_Ap['RECS_AP'];
        console.log(this.recs_apPorSesion);
      }
    );
  }

  crearRec_Ap(): void {
    console.log(+$("#ses_select").val());

    if (jQuery.isEmptyObject(this.curso)) {
      alert("Complete la informacion general del curso, primero.");
    } else {
      if(this.modulos.length == 0){
        alert("Registre algún módulo, primero.");
      }else{
        if(this.sesiones.length == 0){
          alert("Registre alguna sesión, primero.");
        }else{
          this.sesionService.get(+$("#ses_select").val()).subscribe(
            Sesion => {
              this.sesion = Sesion['SESIONES'][0];
              console.log(this.sesion);

              if(+$("#sel-tip-rec-ap").val() == 1){
                this.rec_apLow.id_tipo_rec_ap_fk = 1;
              }else if (+$("#sel-tip-rec-ap").val() == 2){
                this.rec_apLow.id_tipo_rec_ap_fk = 2;
              }

              this.rec_apLow.id_sesion_fk = this.sesion.ID_SESION;
              console.log(this.rec_apLow);
              this.rec_apService.create(this.rec_apLow).subscribe(
                Response => {
                  this.listarRecs_Ap();
                  $("#titulo_recurso").val("");
                  $("#rec_ap_vid").val("");
                  $("#rec_ap_doc").val("");
                  $("#ses_select").val("");
                }
              );
            }
          );
        }
      }
    }

  }

  ///////////////////////////////////////////////

  cargar(): void {
    $("#hdr-inst").show();
    $("#lsb-inst").show();
    $("#ftr-inst").show();

    $("#login").remove();
    $("#register").remove();

    $("#hdr-est").remove();
    $("#lsb-est").remove();
    $("#ftr-est").remove();

    $("#hdr-iiap").remove();
    $("#ftr-iiap").remove();

    $('#add-course-tab').steps({
      onFinish: function () {
        alert('Wizard Completed');
      }
    });
    //-----------------------------------//



    //----------------------------------//

    // === Dropdown === //

    $('.ui.dropdown')
      .dropdown()
      ;

    // === Model === //
    $('.ui.modal')
      .modal({
        blurring: true
      })
      .modal('show')
      ;

    // === Tab === //
    $('.menu .item')
      .tab()
      ;

    // === checkbox Toggle === //
    $('.ui.checkbox')
      .checkbox()
      ;

    // === Toggle === //
    $('.enable.button')
      .on('click', function () {
        $(this)
          .nextAll('.checkbox')
          .checkbox('enable')
          ;
      })
      ;

    // Featured Courses home
    $('.courses_performance').owlCarousel({
      items: 10,
      loop: false,
      margin: 30,
      nav: true,
      dots: false,
      navText: ["<i class='uil uil-angle-left'></i>", "<i class='uil uil-angle-right'></i>"],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        },
        1200: {
          items: 1
        },
        1400: {
          items: 1
        }
      }
    })

    // Latest News Dashboard
    $('.edututs_news').owlCarousel({
      items: 10,
      loop: false,
      margin: 30,
      nav: true,
      dots: false,
      navText: ["<i class='uil uil-angle-left'></i>", "<i class='uil uil-angle-right'></i>"],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        },
        1200: {
          items: 1
        },
        1400: {
          items: 1
        }
      }
    })


    /*Floating Code for Iframe Start*/
    if (jQuery('iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"],iframe[src*="https://player.vimeo.com/"]').length > 0) {
      /*Wrap (all code inside div) all vedio code inside div*/
      jQuery('iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"]').wrap("<div class='iframe-parent-class'></div>");
      /*main code of each (particular) vedio*/
      jQuery('iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"]').each(function (index) {

        /*Floating js Start*/
        var windows = jQuery(window);
        var iframeWrap = jQuery(this).parent();
        var iframe = jQuery(this);
        var iframeHeight = iframe.outerHeight();
        var iframeElement = iframe.get(0);
        windows.on('scroll', function () {
          var windowScrollTop = windows.scrollTop();
          var iframeBottom = iframeHeight + iframeWrap.offset().top;
          //alert(iframeBottom);

          if ((windowScrollTop > iframeBottom)) {
            iframeWrap.height(iframeHeight);
            iframe.addClass('stuck');
            jQuery(".scrolldown").css({ "display": "none" });
          } else {
            iframeWrap.height('auto');
            iframe.removeClass('stuck');
          }
        });
        /*Floating js End*/
      });
    }

    // expand/collapse all Start

    var headers = $('#accordion .accordion-header');
    var contentAreas = $('#accordion .ui-accordion-content ').hide()
      .first().show().end();
    var expandLink = $('.accordion-expand-all');

    // add the accordion functionality
    headers.click(function () {
      // close all panels
      contentAreas.slideUp();
      // open the appropriate panel
      $(this).next().slideDown();
      // reset Expand all button
      expandLink.text('Expand all')
        .data('isAllOpen', false);
      // stop page scroll
      return false;
    });

    // hook up the expand/collapse all
    expandLink.click(function () {
      var isAllOpen = !$(this).data('isAllOpen');
      console.log({ isAllOpen: isAllOpen, contentAreas: contentAreas })
      contentAreas[isAllOpen ? 'slideDown' : 'slideUp']();

      expandLink.text(isAllOpen ? 'Collapse All' : 'Expand all')
        .data('isAllOpen', isAllOpen);
    });


    // Payment Method Accordion
    $('input[name="paymentmethod"]').on('click', function () {
      var $value = $(this).attr('value');
      $('.return-departure-dts').slideUp();
      $('[data-method="' + $value + '"]').slideDown();
    });






    //////////////////////////////////////////////////////////////////////////////////////////////

    // Night Mode JS
    (function (window, document, undefined) {
      'use strict';
      if (!('localStorage' in window)) return;
      var nightMode = localStorage.getItem('gmtNightMode');
      if (nightMode == "true") {
        document.documentElement.className += ' night-mode';
      }
    })(window, document);


    (function (window, document, undefined) {

      'use strict';

      // Feature test
      if (!('localStorage' in window)) return;

      // Get our newly insert toggle
      var nightMode = document.querySelector('#night-mode');
      if (!nightMode) return;

      // When clicked, toggle night mode on or off
      nightMode.addEventListener('click', function (event) {
        event.preventDefault();
        document.documentElement.classList.toggle('night-mode');
        if (document.documentElement.classList.contains('night-mode')) {
          localStorage.setItem('gmtNightMode', "true");
          return;
        }
        localStorage.removeItem('gmtNightMode');
      }, false);

    })(window, document);
  }

}
