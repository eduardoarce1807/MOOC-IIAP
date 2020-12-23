import { Component, OnInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

import { Router, ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/Clases/curso';
import { Usuario } from 'src/app/Clases/usuario';
import { Modulo } from 'src/app/Clases/modulo';
import { Sesion } from 'src/app/Clases/sesion';
import { Rec_Ap } from 'src/app/Clases/rec_ap';
import { CursoService } from 'src/app/services/curso.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ModuloService } from 'src/app/services/modulo.service';
import { SesionService } from 'src/app/services/sesion.service';
import { RecApService } from 'src/app/services/rec-ap.service';
import { InscripcionService } from 'src/app/services/inscripcion.service';
import { PreguntaService } from 'src/app/services/pregunta.service';
import { AlternativaService } from 'src/app/services/alternativa.service';
import { RespuestaService } from 'src/app/services/respuesta.service';
import { CtrlVistaService } from 'src/app/services/ctrl-vista.service';
import { UsuCurService } from 'src/app/services/usu-cur.service';
import { InscripcionLow } from 'src/app/Clases/LowCase/inscripcionLow';
import { Inscripcion } from 'src/app/Clases/inscripcion';
import { UsuCur } from 'src/app/Clases/usu_cur';
import { Ctrl_VistaLow } from 'src/app/Clases/LowCase/ctrl_vistaLow';
import { Ctrl_Vista } from 'src/app/Clases/ctrl_vista';
import { Pregunta } from 'src/app/Clases/pregunta';
import { Alternativa } from 'src/app/Clases/alternativa';
import { Respuesta } from 'src/app/Clases/respuesta';
import { RespuestaLow } from 'src/app/Clases/LowCase/respuestaLow';


declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-desarrollar-curso',
  templateUrl: './desarrollar-curso.component.html',
  styleUrls: ['./desarrollar-curso.component.css']
})
export class DesarrollarCursoComponent implements OnInit {

  capacitadores: Usuario[];
  usu_cur: UsuCur[];
  usuarios: Usuario[];
  curso: Curso = new Curso();
  inscripcion: Inscripcion = new Inscripcion();
  inscripciones: Inscripcion[];
  ctrl_vistas: Ctrl_Vista[];

  ctrl_vistasByIdRecAp: Ctrl_Vista[];

  preguntas: Pregunta[];
  alternativas: Alternativa[];
  respuestas: RespuestaLow[];


  modulos: Modulo[];
  sesiones: Sesion[];
  recs_ap: Rec_Ap[];

  videoUrl: any;
  dangerousVideoUrl: any;
  usuA: any;

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cursoService: CursoService,
    private usuarioService: UsuarioService,
    private moduloService: ModuloService,
    private sesionService: SesionService,
    private rec_apService: RecApService,
    private inscripcionService: InscripcionService,
    private usu_curService: UsuCurService,
    private ctrl_vistaService: CtrlVistaService,
    private preguntaService: PreguntaService,
    private alternativaService: AlternativaService,
    private respuestaService: RespuestaService
  ) { }

  ngOnInit(): void {
    $("#eval").hide();
    $("#iframeX").show();
    this.cargar();
    this.cargarCurso();
  }

  cargar(): void {

    $("#login").remove();
    $("#register").remove();

    $("#hdr-inst").remove();
    $("#lsb-inst").remove();
    $("#ftr-inst").remove();

    $("#hdr-iiap").remove();
    $("#ftr-iiap").remove();

    $("#hdr-adm").remove();
    $("#lsb-adm").remove();

    $("#hdr-est").show();
    $("#lsb-est").show();
    $("#ftr-est").show();

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


    // Home Live Stream
    $('.live_stream').owlCarousel({
      items: 10,
      loop: false,
      margin: 10,
      nav: true,
      dots: false,
      navText: ["<i class='uil uil-angle-left'></i>", "<i class='uil uil-angle-right'></i>"],
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 3
        },
        1000: {
          items: 3
        },
        1200: {
          items: 5
        },
        1400: {
          items: 6
        }
      }
    })

    // Featured Courses home
    $('.featured_courses').owlCarousel({
      items: 10,
      loop: false,
      margin: 20,
      nav: true,
      dots: false,
      navText: ["<i class='uil uil-angle-left'></i>", "<i class='uil uil-angle-right'></i>"],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 1
        },
        1200: {
          items: 2
        },
        1400: {
          items: 3
        }
      }
    })

    // Featured Courses home
    $('.top_instrutors').owlCarousel({
      items: 10,
      loop: false,
      margin: 20,
      nav: true,
      dots: false,
      navText: ["<i class='uil uil-angle-left'></i>", "<i class='uil uil-angle-right'></i>"],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 1
        },
        1200: {
          items: 2
        },
        1400: {
          items: 3
        }
      }
    })

    // Student Says
    $('.Student_says').owlCarousel({
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
          items: 2
        },
        1000: {
          items: 2
        },
        1200: {
          items: 3
        },
        1400: {
          items: 3
        }
      }
    })

    // features Careers
    $('.feature_careers').owlCarousel({
      items: 4,
      loop: false,
      margin: 20,
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

    /*Floating Code for Iframe End*/

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

  updateVideoUrl(id: string) {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
    this.videoUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl.toString());
    console.log(this.videoUrl);
  }

  cargarCurso(): void {

    this.activatedRoute.params.subscribe(
      params => {
        let url = params['url'];

        if (url) {

          this.ctrl_vistaService.getAll().subscribe(
            Ctrl_Vistas => {
              this.ctrl_vistas = Ctrl_Vistas;
              console.log(this.ctrl_vistas);
            }
          );

          this.usuarioService.getAll().subscribe(
            Usuarios => {
              this.usuarios = Usuarios;
              console.log(this.usuarios);
              this.cursoService.getByUrl(url).subscribe(
                Curso => {
                  this.curso = Curso['CURSOS'][0];
                  console.log(this.curso);

                  this.usuarioService.getIByCursoId(this.curso.ID_CURSO).subscribe(
                    Usuarios => {
                      this.capacitadores = Usuarios['USUARIOS'];
                      console.log(this.capacitadores);
                    }
                  );
                  this.updateVideoUrl(this.curso.RUTA_VID.slice(32));
                  this.inscripcionService.getByIdCur(this.curso.ID_CURSO).subscribe(
                    Inscripciones => {
                      this.inscripciones = Inscripciones['INSCRIPCIONES'];
                      console.log(this.inscripciones);
                    }
                  );
                  this.moduloService.getByCursoId(this.curso.ID_CURSO).subscribe(
                    Modulos => {
                      this.modulos = Modulos['MODULOS'];
                      console.log(this.modulos);
                    }
                  )
                  this.sesionService.getByCursoId(this.curso.ID_CURSO).subscribe(
                    Sesiones => {
                      this.sesiones = Sesiones['SESIONES'];
                      console.log(this.sesiones);
                    }
                  );
                  this.rec_apService.getByCursoId(this.curso.ID_CURSO).subscribe(
                    Recs_Ap => {
                      this.recs_ap = Recs_Ap['RECS_AP'];
                    }
                  );
                }
              );
            }
          );




        }

      }
    );

  }

  vRec_Ap(rec_ap: Rec_Ap): void {
    $("#eval").hide();
    $("#iframeX").show();
    this.updateVideoUrl(rec_ap.URL.slice(32));
    this.ctrl_vistaService.getByIdRecAp(rec_ap.ID_REC_AP).subscribe(
      Rec_ApX => {
        this.ctrl_vistasByIdRecAp = Rec_ApX['CTRL_VISTAS'];
        if (this.ctrl_vistasByIdRecAp.length == 0) {
          var ctrl_vista: Ctrl_VistaLow = new Ctrl_VistaLow();
    
          ctrl_vista.id_rec_ap_fk = rec_ap.ID_REC_AP;
    
          var uActivo: any = localStorage.getItem("uActivo"); //Obtener datos de localStorage
          uActivo = JSON.parse(uActivo); // Covertir a objeto
          if (uActivo === null) {// Si no existe, creamos un array vacio.
            uActivo = []; // es es un  array
          } else {
            this.usuA = JSON.parse(uActivo[0]);
    
            this.inscripcionService.getByIdCurIdUsu(this.curso.ID_CURSO, this.usuA.id_usuario).subscribe(
              Inscripcion => {
                this.inscripcion = Inscripcion['INSCRIPCIONES'][0];
                ctrl_vista.id_inscripcion_fk = this.inscripcion.ID_INSCRIPCION;
                ctrl_vista.visto = '1';
                this.ctrl_vistaService.create(ctrl_vista).subscribe();
              }
            );
    
          }
    
        }
      }
    );

  }

  dRec_Ap(rec_ap: Rec_Ap): void {
    window.open(
      rec_ap.URL.toString(),
      '_blank' // <- This is what makes it open in a new window.
    );
    this.ctrl_vistaService.getByIdRecAp(rec_ap.ID_REC_AP).subscribe(
      Rec_ApX => {
        this.ctrl_vistasByIdRecAp = Rec_ApX['CTRL_VISTAS'];
        if (this.ctrl_vistasByIdRecAp.length == 0) {
          var ctrl_vista: Ctrl_VistaLow = new Ctrl_VistaLow();
    
          ctrl_vista.id_rec_ap_fk = rec_ap.ID_REC_AP;
    
          var uActivo: any = localStorage.getItem("uActivo"); //Obtener datos de localStorage
          uActivo = JSON.parse(uActivo); // Covertir a objeto
          if (uActivo === null) {// Si no existe, creamos un array vacio.
            uActivo = []; // es es un  array
          } else {
            this.usuA = JSON.parse(uActivo[0]);
    
            this.inscripcionService.getByIdCurIdUsu(this.curso.ID_CURSO, this.usuA.id_usuario).subscribe(
              Inscripcion => {
                this.inscripcion = Inscripcion['INSCRIPCIONES'][0];
                ctrl_vista.id_inscripcion_fk = this.inscripcion.ID_INSCRIPCION;
                ctrl_vista.visto = '1';
                this.ctrl_vistaService.create(ctrl_vista).subscribe();
              }
            );
    
          }
    
        }
      }
    );
  }

  eRec_Ap(rec_ap: Rec_Ap): void {

    $("#eval").show();
    $("#iframeX").hide();

    var texto = '';

    $("#titulo_e").text(rec_ap.TITULO);

    this.preguntaService.getByIdRecAp(rec_ap.ID_REC_AP).subscribe(
      Preguntas => {
        this.preguntas = Preguntas['PREGUNTAS'];
        console.log(this.preguntas);
        this.alternativaService.getByIdRecAp(rec_ap.ID_REC_AP).subscribe(
          Alternativas => {
            this.alternativas = Alternativas['ALTERNATIVAS'];
            console.log(this.alternativas);
            for(var i = 0; i<this.preguntas.length; i++){
              texto = texto + '<div class="ques_item">'+
                                '<div class="ques_title">'+
                                  '<span>Pregunta '+(i+1)+': </span>'+
                                    this.preguntas[i].NOMBRE+
                                '</div>'+
                                '<div class="ui form">'+
                                  '<div class="grouped fields">';
                                    
              for(var j = 0; j<this.alternativas.length; j++){
                if(this.preguntas[i].ID_PREGUNTA == this.alternativas[j].ID_PREGUNTA_FK){
                  texto = texto + 
                                    '<div class="form-check">'+
                                      '<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios'+(j+1)+'" value="option'+(j+1)+'">'+
                                      '<label class="form-check-label" for="exampleRadios'+(j+1)+'">'+
                                        this.alternativas[j].NOMBRE+
                                      '</label>'+
                                    '</div>';
                }
              }

              texto = texto +
                                  '</div>'+
                                '</div>'+
                              '</div>';
                                    
            }
            setTimeout(function(){
              console.log(texto);
              $("#contE").append(texto);
            }, 1000);
          }
        );
      }
    );
  
  }

}
