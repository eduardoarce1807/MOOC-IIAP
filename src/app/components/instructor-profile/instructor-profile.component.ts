import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-instructor-profile',
  templateUrl: './instructor-profile.component.html',
  styleUrls: ['./instructor-profile.component.css']
})
export class InstructorProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $("#hdr-est").show();
    $("#lsb-est").show();
    $("#ftr-est").show();

    $("#hdr-inst").remove();
    $("#lsb-inst").remove();
    $("#ftr-inst").remove();

    $("#hdr-iiap").remove();
    $("#ftr-iiap").remove();

    $("#hdr-adm").remove();
    $("#lsb-adm").remove();

    $('#wrpr').addClass('wrapper _bg4586');
  }

}
