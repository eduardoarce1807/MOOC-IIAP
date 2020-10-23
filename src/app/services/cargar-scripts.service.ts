import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptsService {

  constructor() { }

  CargaJS( archivos:string[] ){
    for(let archivo of archivos){
      let script = document.createElement("script");
      script.src = "../assets/js/"+ archivo + ".js";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild( script );
    }
  }
  CargaVendor( archivos:string[] ){
    for(let archivo of archivos){
      let script = document.createElement("script");
      script.src = "../assets/vendor/"+ archivo + ".js";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild( script );
    }
  }
  CargaScr( archivos:string[] ){
    for(let archivo of archivos){
      let script = document.createElement("script");
      script.src = archivo + ".js";
      let body = document.getElementsByTagName("head")[0];
      body.appendChild( script );
    }
  }
  CargaScript( archivos:string[], integridades: string[] ){
    for(let archivo of archivos){
      let script = document.createElement("script");
      script.integrity = integridades + "";
      script.src = archivo + ".js";
      script.crossOrigin = "anonymous";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild( script );
    }
  }

}
