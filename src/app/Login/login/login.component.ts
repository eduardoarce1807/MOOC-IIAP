import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Clases/usuario';
import { RolUsuService } from 'src/app/services/rol-usu.service';

import { UsuarioService } from '../../services/usuario.service';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios: Usuario[]

  constructor(private usuarioService: UsuarioService, private rol_usuService: RolUsuService) { }

  ngOnInit(): void {

    var uActivo: any = localStorage.getItem("uActivo"); //Obtener datos de localStorage
    uActivo = JSON.parse(uActivo); // Covertir a objeto
    if (uActivo === null) {// Si no existe, creamos un array vacio.
      uActivo = []; // es es un  array
    }

    var xd: any;

    this.usuarioService.getAll().subscribe(
      usuarios => { xd = usuarios }
    );

    var auxx = this.rol_usuService;

    $("#btn_login").bind("click", function () {

      setTimeout(
        function () {
          var aux: number;
          var checker = false;
          for (var i = 0; i < xd.length; i++) {
            if ($("#usuario_f").val() == xd[i].USUARIO) {
              if ($("#clave_f").val() == xd[i].CLAVE) {
                aux = i;
                checker = true;
              }
            }
          }

          if (checker) {

            var xdA: any;

            auxx.getUsu(xd[aux].ID_USUARIO).subscribe(
              rol_usu => { xdA = rol_usu }
            );

            setTimeout(
              function()
              {
                var tipo: string;
                if(xdA["ROLES_USU"][0].ID_ROL_FK == 1){
                  tipo = "Administrador";
                }
                if(xdA["ROLES_USU"][0].ID_ROL_FK == 2){
                  tipo = "Estudiante";
                }
                if(xdA["ROLES_USU"][0].ID_ROL_FK == 3){
                  tipo = "Instructor";
                }
                var usuA = JSON.stringify({
                  id_usuario: xd[aux].ID_USUARIO,
                  nombres: xd[aux].NOMBRES,
                  ap_paterno: xd[aux].AP_PATERNO,
                  ap_materno: xd[aux].AP_MATERNO,
                  descripcion: xd[aux].DESCRIPCION,
                  dni: xd[aux].DNI,
                  correo: xd[aux].CORREO,
                  fecha_nacimiento: xd[aux].FECHA_NACIMIENTO,
                  sexo: xd[aux].SEXO,
                  usuario: xd[aux].USUARIO,
                  clave: xd[aux].CLAVE,
                  estado: xd[aux].ESTADO,
                  tipo: tipo
                });
    
                uActivo.splice(0, 1);
                localStorage.setItem("uActivo", JSON.stringify(uActivo));
    
                uActivo.push(usuA);
                localStorage.setItem("uActivo", JSON.stringify(uActivo));
    
                if(tipo == "Estudiante"){
                  window.location.href="/home";
                }
                if(tipo == "Instructor"){
                  window.location.href="/home-instructor";
                }
                if(tipo == "Administrador"){
                  window.location.href="/home-admin";
                }

              }, 2000);

          }

        }, 1000);

    });

  }

}
