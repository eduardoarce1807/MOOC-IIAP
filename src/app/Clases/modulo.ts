import { Curso } from "./curso";

export class Modulo {

    id_modulo: number;
    titulo: string;
    descripcion: string;
    n_materiales: number;
    estado: string;
    curso: Curso;

}