import { Component, OnInit } from '@angular/core';
import { RolUsuService } from 'src/app/services/rol-usu.service';

import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/Clases/usuario';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-instructor-profile-public',
  templateUrl: './instructor-profile-public.component.html',
  styleUrls: ['./instructor-profile-public.component.css']
})
export class InstructorProfilePublicComponent implements OnInit {

  usuA: any;
  usuario: Usuario = new Usuario();

  constructor(
    public rol_usuService: RolUsuService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {

    this.cargarUsuario();

    $("#config").hide();

    $("#hdr-est").show();
    $("#lsb-est").show();
    $("#ftr-est").show();

    $("#login").remove();

    $("#register").remove();

    $("#hdr-inst").remove();
    $("#lsb-inst").remove();
    $("#ftr-inst").remove();

    $("#hdr-iiap").remove();
    $("#ftr-iiap").remove();

    $('#wrpr').addClass('wrapper _bg4586');

    var uActivo: any = localStorage.getItem("uActivo"); //Obtener datos de localStorage
    uActivo = JSON.parse(uActivo); // Covertir a objeto
    if (uActivo === null) {// Si no existe, creamos un array vacio.
      uActivo = []; // es es un  array
    }else{
      this.usuA = JSON.parse(uActivo[0]);
    }


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

  cargarUsuario(): void {
    this.activatedRoute.params.subscribe(
      params => {
        let usu = params['usu'];
        this.usuarioService.getByUsu(usu).subscribe(
          Usuario => {
            this.usuario = Usuario['USUARIOS'][0];
            console.log(this.usuario);
            if(this.usuario.ID_USUARIO == this.usuA.id_usuario){
              $("#config").show();
            }
          }
        );
      }
    );
  }

}
