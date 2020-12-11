import { Injectable } from '@angular/core';

import { Pregunta } from '../Clases/pregunta';
import { PreguntaLow } from '../Clases/LowCase/preguntaLow';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  private urlEndPoint = 'http://localhost:8086/preguntas';

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    getAll(): Observable<Pregunta[]> {
        return this.http.get(`${this.urlEndPoint}/all`).pipe(
            map(response => response['PREGUNTAS'] as Pregunta[])
        );
    }

    // insertando lo datos  en la base de datos
    create(PreguntaLow: PreguntaLow): Observable<any> { // devuele el objeto creado
        return this.http.post(`${this.urlEndPoint}/add`, PreguntaLow, { headers: this.httpHeaders }); // pasamos la url, objeto, el formato de manejo de json
    }

    // obteniendo datos por ID
    get(id: number): Observable<any> {
        return this.http.get(`${this.urlEndPoint}/${id}`)
    }

    // metodo actualizar 
    update(PreguntaLow: PreguntaLow): Observable<PreguntaLow> {
        return this.http.put<PreguntaLow>(`${this.urlEndPoint}/update/${PreguntaLow.id_pregunta}`, PreguntaLow, { headers: this.httpHeaders })
    }

    // agregando el eliminar 
    delete(id: number): Observable<PreguntaLow> {
        return this.http.delete<PreguntaLow>(`${this.urlEndPoint}/delete/${id}`, { headers: this.httpHeaders })
    }

}
