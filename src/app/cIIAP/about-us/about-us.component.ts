import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $("#hdr-iiap").show();
    $("#ftr-iiap").show();

    $("#hdr-est").remove();
    $("#lsb-est").remove();
    $("#ftr-est").remove();

    $("#hdr-inst").remove();
    $("#lsb-inst").remove();
    $("#ftr-inst").remove();

    $('#wrpr').addClass('wrapper _bg4586 _new89');
  }

}
