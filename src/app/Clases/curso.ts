import { Categoria } from "./categoria";
import { Usuario } from "./usuario";

export class Curso {

    id_usuario: number;
    titulo: String;
    subtitulo: String;
    precio: number;
    ruta_portada: String;
    url: String;
    n_modulos: number;
    estado: String;
    objetivo: String;
    perfil_participante: String;
    metodologia: String;
    competencias: String;
    categoria: Categoria;
    usuario: Usuario;

}