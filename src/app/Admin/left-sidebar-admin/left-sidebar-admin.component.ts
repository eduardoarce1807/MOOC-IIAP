import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-sidebar-admin',
  templateUrl: './left-sidebar-admin.component.html',
  styleUrls: ['./left-sidebar-admin.component.css']
})
export class LeftSidebarAdminComponent implements OnInit {

  usuA: any;

  constructor() { }

  ngOnInit(): void {
    var uActivo: any = localStorage.getItem("uActivo"); //Obtener datos de localStorage
    uActivo = JSON.parse(uActivo); // Covertir a objeto
    if (uActivo === null) {// Si no existe, creamos un array vacio.
      uActivo = []; // es es un  array
    }else{

      this.usuA = JSON.parse(uActivo[0]);

    }
  }

}
