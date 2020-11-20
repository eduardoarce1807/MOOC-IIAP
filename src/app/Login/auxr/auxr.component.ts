import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-auxr',
  templateUrl: './auxr.component.html',
  styleUrls: ['./auxr.component.css']
})
export class AuxrComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $("#register").show();

    $("#login").remove();

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
