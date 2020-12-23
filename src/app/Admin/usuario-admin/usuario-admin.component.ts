import { Component, OnInit } from '@angular/core';
import { UsuarioLow } from 'src/app/Clases/LowCase/usuarioLow';
import { Usuario } from 'src/app/Clases/usuario';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';
import { UsuarioService } from 'src/app/services/usuario.service';

declare var $: any;

@Component({
  selector: 'app-usuario-admin',
  templateUrl: './usuario-admin.component.html',
  styleUrls: ['./usuario-admin.component.css']
})
export class UsuarioAdminComponent implements OnInit {

  usuarios: Usuario[];
  usuarioLow: UsuarioLow = new UsuarioLow();

  constructor(private CS: CargarScriptsService,
      private usuarioService: UsuarioService
    ) {
    
    CS.CSSUser([
      "assets/css/styles.css",
      "https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css"
    ]);
    CS.JSTabla(["https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"]);
  }

  ngOnInit(): void {

    $('#wrpr').removeClass('wrapper').addClass('layoutSidenav');

    $("#login").remove();
    $("#register").remove();

    $("#btstrp").remove();

    $("#hdr-est").remove();
    $("#lsb-est").remove();
    $("#ftr-est").remove();

    $("#hdr-inst").remove();
    $("#lsb-inst").remove();
    $("#ftr-inst").remove();

    $("#hdr-iiap").remove();
    $("#ftr-iiap").remove();

    $("#hdr-adm").show();
    $("#lsb-adm").show();

    this.usuarioService.getAll().subscribe(
      Usuarios => {
        this.usuarios = Usuarios;
        console.log(this.usuarios);
        setTimeout(function(){
          $('#usuariosTable').DataTable();
        },100);
      }
    );

  }

  crearUsuario(): void {
    
  }

}
