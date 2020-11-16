import { Tipo_Usu } from "./tipo_usu";

export class Usuario {

    id_usuario: number;
    nombres: String;
    apellidos: String;
    descripcion: String;
    DNI: String;
    fecha_nacimiento: Date;
    sexo: string;
    usuario: string;
    clave: string;
    estado: string;
    tipo_usu: Tipo_Usu;

}