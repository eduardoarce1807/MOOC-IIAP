import { Pregunta } from "./pregunta";

export class Alternativa {

    id_alternativa: number;
    nombre: string;
    estado: string;
    correcta: string;
    pregunta: Pregunta;

}