import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $("#login").remove();
    $("#register").remove();

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
