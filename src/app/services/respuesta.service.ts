import { Injectable } from '@angular/core';

import { Respuesta } from '../Clases/respuesta';
import { RespuestaLow } from '../Clases/LowCase/respuestaLow';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {

  private urlEndPoint = 'http://localhost:8086/respuestas';

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    getAll(): Observable<Respuesta[]> {
        return this.http.get(`${this.urlEndPoint}/all`).pipe(
            map(response => response['RESPUESTAS'] as Respuesta[])
        );
    }

    // insertando lo datos  en la base de datos
    create(RespuestaLow: RespuestaLow): Observable<any> { // devuele el objeto creado
        return this.http.post(`${this.urlEndPoint}/add`, RespuestaLow, { headers: this.httpHeaders }); // pasamos la url, objeto, el formato de manejo de json
    }

    // obteniendo datos por ID
    get(id: number): Observable<any> {
        return this.http.get(`${this.urlEndPoint}/${id}`)
    }

    // metodo actualizar 
    update(RespuestaLow: RespuestaLow): Observable<RespuestaLow> {
        return this.http.put<RespuestaLow>(`${this.urlEndPoint}/update/${RespuestaLow.id_respuesta}`, RespuestaLow, { headers: this.httpHeaders })
    }

    // agregando el eliminar 
    delete(id: number): Observable<RespuestaLow> {
        return this.http.delete<RespuestaLow>(`${this.urlEndPoint}/delete/${id}`, { headers: this.httpHeaders })
    }

}
