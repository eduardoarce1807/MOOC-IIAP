import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-auxl',
  templateUrl: './auxl.component.html',
  styleUrls: ['./auxl.component.css']
})
export class AuxlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $("#login").show();
    $("#register").remove();

    $("#wrpr").remove();

    $("#hdr-est").remove();
    $("#lsb-est").remove();
    $("#ftr-est").remove();

    $("#hdr-inst").remove();
    $("#lsb-inst").remove();
    $("#ftr-inst").remove();

    $("#hdr-iiap").remove();
    $("#ftr-iiap").remove();

  }

}
