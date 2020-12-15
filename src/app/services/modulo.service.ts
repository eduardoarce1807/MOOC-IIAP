import { Injectable } from '@angular/core';

import { Modulo } from '../Clases/modulo';
import { ModuloLow } from '../Clases/LowCase/moduloLow';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuloService {

  private urlEndPoint = 'http://localhost:8086/modulos';

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    getAll(): Observable<Modulo[]> {
        return this.http.get(`${this.urlEndPoint}/all`).pipe(
            map(response => response['MODULOS'] as Modulo[])
        );
    }

    // insertando lo datos  en la base de datos
    create(ModuloLow: ModuloLow): Observable<any> { // devuele el objeto creado
        return this.http.post(`${this.urlEndPoint}/add`, ModuloLow, { headers: this.httpHeaders }); // pasamos la url, objeto, el formato de manejo de json
    }

    // obteniendo datos por ID
    get(id: number): Observable<any> {
        return this.http.get(`${this.urlEndPoint}/${id}`)
    }

    // obteniendo datos por ID del Curso
    getByCursoId(id: number): Observable<any> {
        return this.http.get(`${this.urlEndPoint}/id-curso?id=${id}`)
    }

    // metodo actualizar 
    update(ModuloLow: ModuloLow): Observable<ModuloLow> {
        return this.http.put<ModuloLow>(`${this.urlEndPoint}/update/${ModuloLow.id_modulo}`, ModuloLow, { headers: this.httpHeaders })
    }

    // agregando el eliminar 
    delete(id: number): Observable<ModuloLow> {
        return this.http.delete<ModuloLow>(`${this.urlEndPoint}/delete/${id}`, { headers: this.httpHeaders })
    }

}
