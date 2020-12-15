import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

import { Router, ActivatedRoute } from '@angular/router';

import { UsuarioLow } from 'src/app/Clases/LowCase/usuarioLow';
import { Usuario } from 'src/app/Clases/usuario';
import { RolUsuService } from 'src/app/services/rol-usu.service';
import { Rol_UsuLow } from 'src/app/Clases/LowCase/rol_usuLow';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public usuarioLow: UsuarioLow = new UsuarioLow();
  private titulo: String = "Registro de Usuario";

  constructor(public usuarioService: UsuarioService,
    private Rol_UsuService: RolUsuService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  public createUsu(): void {

    console.log(this.usuarioLow);

    var sexo = $("#sexo_f").val();

    this.usuarioLow.sexo = sexo;

    var us = this.usuarioLow;
    var usuariosBD: any;
    var uService = this.usuarioService;
    var r_uService = this.Rol_UsuService;

    this.usuarioService.getAll().subscribe(
      usuarios => { usuariosBD = usuarios }
    );

    setTimeout(
      function () {

        var checker = true;

        if ($("#nombres_f").val() == "" ||
          $("#ap_paterno_f").val() == "" ||
          $("#ap_materno_f").val() == "" ||
          $("#dni_f").val() == "" ||
          $("#fecha_nacimiento_f").val() == "" ||
          $("#sexo_f").val() == "0" ||
          $("#correo_f").val() == "" ||
          $("#usuario_f").val() == "" ||
          $("#clave_f").val() == ""
        ) {
          $("#alerta").show();
          $("#alerta").text("Por favor, complete todos los campos.");
          checker = false;
        } else {
          for (var i = 0; i < usuariosBD.length; i++) {

            if (us.dni == usuariosBD[i].DNI) {
              $("#alerta").show();
              $("#alerta").text("Este DNI ya está registrado.");
              checker = false;
            }
            if (us.usuario == usuariosBD[i].USUARIO) {
              $("#alerta").show();
              $("#alerta").text("Este usuario ya está registrado.");
              checker = false;
            }
            if (us.correo == usuariosBD[i].CORREO) {
              $("#alerta").show();
              $("#alerta").text("Este correo ya está registrado.");
              checker = false;
            }
          }

        }

        if (checker) {
          $("#alerta").hide();
          $("#alerta2").show();
          $("#alerta2").text("Usuario correctamente registrado.");

          //Crear estudiante
          // uService.create(us).subscribe();
          uService.createR(us, 0).subscribe(
            (Response) => window.location.href = '/login'
          );

          

        }

      }, 2000);

  }

  ngOnInit(): void {


    $("#alerta").hide();
    $("#alerta2").hide();

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

}
