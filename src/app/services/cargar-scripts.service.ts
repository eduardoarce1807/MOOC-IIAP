import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptsService {

  constructor() { }

  CSSUser( archivos:string[] ){
    for(let archivo of archivos){
      let css = document.createElement("link");
      css.href = archivo;
      css.rel = "stylesheet";
      let head = document.getElementsByTagName("head")[0];
      head.appendChild(css);
    }
  }

  CSSUser1( archivos:string[] ){
    for(let archivo of archivos){
      let css = document.createElement("link");
      css.href = archivo;
      css.rel = "stylesheet";
      css.type = "text/css";
      let head = document.getElementsByTagName("head")[0];
      head.appendChild(css);
    }
  }

}
