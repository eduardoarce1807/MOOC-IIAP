import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-instructor',
  templateUrl: './header-instructor.component.html',
  styleUrls: ['./header-instructor.component.css']
})
export class HeaderInstructorComponent implements OnInit {

  constructor() { }

  usuA: any;

  ngOnInit(): void {

    //var uActivo: any = localStorage.getItem("uActivo"); //Obtener datos de localStorage
    //uActivo = JSON.parse(uActivo); // Covertir a objeto
    //if (uActivo === null) {// Si no existe, creamos un array vacio.
    //  uActivo = []; // es es un  array
    //}

    //this.usuA = JSON.parse(uActivo[0]);

  }

}
