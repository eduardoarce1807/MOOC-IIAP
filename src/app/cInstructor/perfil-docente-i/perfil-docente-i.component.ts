import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-perfil-docente-i',
  templateUrl: './perfil-docente-i.component.html',
  styleUrls: ['./perfil-docente-i.component.css']
})
export class PerfilDocenteIComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#wrpr').addClass('wrapper _bg4586');

    $("#hdr-inst").show();
    $("#lsb-inst").show();
    $("#ftr-inst").show();

    $("#login").remove();
    $("#register").remove();

    $("#hdr-est").remove();
    $("#lsb-est").remove();
    $("#ftr-est").remove();

    $("#hdr-adm").remove();
    $("#lsb-adm").remove();

    $("#hdr-iiap").remove();
    $("#ftr-iiap").remove();

  }

}
