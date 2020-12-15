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

    $("#alertaR").hide();
    $("#alertaV").hide();

    var uActivo: any = localStorage.getItem("uActivo"); //Obtener datos de localStorage
    uActivo = JSON.parse(uActivo); // Covertir a objeto
    if (uActivo === null) {// Si no existe, creamos un array vacio.
      uActivo = []; // es es un  array
    }

    var usus: any;

    this.usuarioService.getAll().subscribe(
      usuarios => { usus = usuarios }
    );

    var r_uService = this.rol_usuService;

    $("#btn_login").bind("click", function () {

      setTimeout(
        function () {
          var aux: number;
          var checker = false;
          for (var i = 0; i < usus.length; i++) {
            if ($("#usuario_f").val() == usus[i].USUARIO) {
              if ($("#clave_f").val() == usus[i].CLAVE) {
                aux = i;
                checker = true;
              }
            }
          }

          if (checker) {

            var r_u: any;

            r_uService.getUsu(usus[aux].ID_USUARIO).subscribe(
              rol_usu => { r_u = rol_usu }
            );

            $("#alertaR").hide();
            $("#alertaV").show();
            $("#alertaV").text("Sesión iniciada.");

            setTimeout(
              function()
              {
                var tipo: string;
                if(r_u["ROLES_USU"][0].ID_ROL_FK == 1){
                  tipo = "Administrador";
                }
                if(r_u["ROLES_USU"][0].ID_ROL_FK == 2){
                  tipo = "Estudiante";
                }
                if(r_u["ROLES_USU"][0].ID_ROL_FK == 3){
                  tipo = "Instructor";
                }
                var usuA = JSON.stringify({
                  id_usuario: usus[aux].ID_USUARIO,
                  nombres: usus[aux].NOMBRES,
                  ap_paterno: usus[aux].AP_PATERNO,
                  ap_materno: usus[aux].AP_MATERNO,
                  descripcion: usus[aux].DESCRIPCION,
                  dni: usus[aux].DNI,
                  correo: usus[aux].CORREO,
                  fecha_nacimiento: usus[aux].FECHA_NACIMIENTO,
                  sexo: usus[aux].SEXO,
                  usuario: usus[aux].USUARIO,
                  clave: usus[aux].CLAVE,
                  estado: usus[aux].ESTADO,
                  tipo: tipo
                });
    
                uActivo.splice(0, 1);
                localStorage.setItem("uActivo", JSON.stringify(uActivo));
    
                uActivo.push(usuA);
                localStorage.setItem("uActivo", JSON.stringify(uActivo));
    
                if(tipo == "Estudiante"){
                  // alert("El pana es estudiante");
                  window.location.href="/home";
                }
                if(tipo == "Instructor"){
                  // alert("El pana es instructor");
                  window.location.href="/home-instructor";
                }
                if(tipo == "Administrador"){
                  // alert("El pana es admin xd");
                  window.location.href="/home-admin";
                }

              }, 2000);

          }else{
            $("#alertaV").hide();
            $("#alertaR").show();
            $("#alertaR").text("Credenciales incorrectas.");
          }

        }, 1000);

    });

  }

}
