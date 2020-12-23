import { Injectable } from '@angular/core';

import { Inscripcion } from '../Clases/inscripcion';
import { InscripcionLow } from '../Clases/LowCase/inscripcionLow';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  private urlEndPoint = 'http://localhost:8086/inscripciones';

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    getAll(): Observable<Inscripcion[]> {
        return this.http.get(`${this.urlEndPoint}/all`).pipe(
            map(response => response['INSCRIPCIONES'] as Inscripcion[])
        );
    }

    // insertando lo datos  en la base de datos
    create(InscripcionLow: InscripcionLow): Observable<any> { // devuele el objeto creado
        return this.http.post(`${this.urlEndPoint}/add`, InscripcionLow, { headers: this.httpHeaders }); // pasamos la url, objeto, el formato de manejo de json
    }

    // obteniendo datos por ID
    get(id: number): Observable<any> {
        return this.http.get(`${this.urlEndPoint}/${id}`)
    }

    // obteniendo datos por ID
    getByIdCur(id: number): Observable<any> {
        return this.http.get(`${this.urlEndPoint}/cur/${id}`)
    }

    // obteniendo datos por ID del usu
    getByIdUsu(id: number): Observable<any> {
        return this.http.get(`${this.urlEndPoint}/usu?id=${id}`)
    }

    getByIdCurIdUsu(idC: number, idU: number): Observable<any> {
        return this.http.get(`${this.urlEndPoint}/usu-cur?idC=${idC}&idU=${idU}`)
    }

    // metodo actualizar 
    update(InscripcionLow: InscripcionLow): Observable<InscripcionLow> {
        return this.http.put<InscripcionLow>(`${this.urlEndPoint}/update/${InscripcionLow.id_inscripcion}`, InscripcionLow, { headers: this.httpHeaders })
    }

    // agregando el eliminar 
    delete(id: number): Observable<InscripcionLow> {
        return this.http.delete<InscripcionLow>(`${this.urlEndPoint}/delete/${id}`, { headers: this.httpHeaders })
    }

}
