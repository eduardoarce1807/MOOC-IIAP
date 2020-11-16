import { Sesion } from "./sesion";
import { Tipo_Sec_Ap } from "./tipo_sec_ap";

export class Sec_Ap {

    id_sec_ap: number;
    orden: number;
    configuracion: string;
    estado: string;
    sesion: Sesion;
    tipo_sec_ap: Tipo_Sec_Ap;

}