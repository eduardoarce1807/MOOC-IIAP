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
import { UsuCurService } from 'src/app/services/usu-cur.service';
import { InscripcionLow } from 'src/app/Clases/LowCase/inscripcionLow';
import { Inscripcion } from 'src/app/Clases/inscripcion';
import { UsuCur } from 'src/app/Clases/usu_cur';


declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  capacitadores: Usuario[];
  usu_cur: UsuCur[];
  usuarios: Usuario[];
  curso: Curso = new Curso();
  inscripcion: InscripcionLow = new InscripcionLow();
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
    private usu_curService: UsuCurService
  ) { }

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

  ngOnInit(): void {

    this.cargar();
    this.cargarCurso();
  }

  inscribirse(): void {

    var uActivo: any = localStorage.getItem("uActivo"); //Obtener datos de localStorage
    uActivo = JSON.parse(uActivo); // Covertir a objeto
    if (uActivo === null) {// Si no existe, creamos un array vacio.
      uActivo = []; // es es un  array
    }else{
      this.usuA = JSON.parse(uActivo[0]);
    }

    this.inscripcion.id_curso_fk = this.curso.ID_CURSO;
    this.inscripcion.id_usuario_fk = this.usuA.id_usuario;

    console.log(this.inscripcion);

    //this.inscripcionService.create(this.inscripcion).subscribe();
  }

  cargar(): void {

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

    $('#wrpr').addClass('wrapper _bg4586');

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

  timer = ms => new Promise(res => setTimeout(res, ms));

  modsx: string = "";

  async load3(num: Rec_Ap[]) {
    for(var i = 1; i<num.length; i++){
      console.log(num);
      this.modsx = this.modsx + '<div class="lecture-container">'+
                                  '<div class="left-content">'+
                                    '<i class="uil uil-play-circle icon_142"></i>'+
                                    '<div class="top">'+
                                      '<div class="title">'+num[i-1].TITULO+'</div>'+
                                    '</div>'+
                                  '</div>'+
                                  '<div class="details">'+
                                    '<a href="#" class="preview-text">Preview</a>'+
                                    '<span class="content-summary">01.40</span>'+
                                  '</div>'+
                                '</div>';
      await this.timer(500); // then the created Promise can be awaited
    }

  }

  async load2(num: Sesion[]) {
    for(var i = 1; i<= num.length; i++){
      
      this.rec_apService.getBySesionId(i).subscribe(
        Recs_ApPorSesion => {
          console.log(i);
          this.modsx = this.modsx + '<div id="accordion" class="ui-accordion ui-widget ui-helper-reset">'+
                                      '<a href="javascript:void(0)" class="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all">'+
                                        '<div class="section-header-left">'+
                                          '<span class="section-title-wrapper">'+
                                            '<i class="uil uil-presentation-play crse_icon"></i>'+
                                            '<span class="section-title-text">'+num[i-1].TITULO+'</span>'+
                                          '</span>'+
                                        '</div>'+
                                      '</a>'+
                                    '</div>'+
                                    '<div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom">';
          
          this.load3(Recs_ApPorSesion['RECS_AP']);
          
          this.modsx = this.modsx + '</div>';
          
        }
      );

      await this.timer(3000); // then the created Promise can be awaited
      
    }
    
  }

  async load () { // We need to wrap the loop into an async function for this to work
    for (var i = 1; i <= this.modulos.length; i++) {
      this.sesionService.getByModuloId(i).subscribe(
        SesionesPorModulo => {
          console.log(i);
          this.modsx = this.modsx + '<h3>'+this.modulos[i-1].TITULO+'</h3>';
          this.load2(SesionesPorModulo['SESIONES']);
          
        }
      );
      await this.timer(10000); // then the created Promise can be awaited
    }
    
    $("#contM").append(this.modsx);
  }

  cargarCurso(): void {

    this.activatedRoute.params.subscribe(
      params => {
        let url = params['url'];

        if (url) {

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
                  this.moduloService.getByCursoId(this.curso.ID_CURSO).subscribe(
                    Modulos => {
                      this.modulos = Modulos['MODULOS'];
                      console.log(this.modulos);
                      this.sesionService.getByCursoId(this.curso.ID_CURSO).subscribe(
                        Sesiones => {
                          this.sesiones = Sesiones['SESIONES'];
                          console.log(this.sesiones);
                          this.rec_apService.getByCursoId(this.curso.ID_CURSO).subscribe(
                            Recs_Ap => {
                              this.recs_ap = Recs_Ap['RECS_AP'];
                              console.log(this.recs_ap);

                              var modsx: string;

                              this.load();

                            }
                          );
                        }
                      );
                    }
                  )
                }
              );
            }
          );

          


        }

      }
    );
  }

}
