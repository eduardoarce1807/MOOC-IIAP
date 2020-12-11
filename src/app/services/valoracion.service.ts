import { Injectable } from '@angular/core';

import { Valoracion } from '../Clases/valoracion';
import { ValoracionLow } from '../Clases/LowCase/valoracionLow';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValoracionService {

  private urlEndPoint = 'http://localhost:8086/valoraciones';

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    getAll(): Observable<Valoracion[]> {
        return this.http.get(`${this.urlEndPoint}/all`).pipe(
            map(response => response['VALORACION'] as Valoracion[])
        );
    }

    // insertando lo datos  en la base de datos
    create(ValoracionLow: ValoracionLow): Observable<any> { // devuele el objeto creado
        return this.http.post(`${this.urlEndPoint}/add`, ValoracionLow, { headers: this.httpHeaders }); // pasamos la url, objeto, el formato de manejo de json
    }

    // obteniendo datos por ID
    get(id: number): Observable<any> {
        return this.http.get(`${this.urlEndPoint}/${id}`)
    }

    // metodo actualizar 
    update(ValoracionLow: ValoracionLow): Observable<ValoracionLow> {
        return this.http.put<ValoracionLow>(`${this.urlEndPoint}/update/${ValoracionLow.id_valoracion}`, ValoracionLow, { headers: this.httpHeaders })
    }

    // agregando el eliminar 
    delete(id: number): Observable<ValoracionLow> {
        return this.http.delete<ValoracionLow>(`${this.urlEndPoint}/delete/${id}`, { headers: this.httpHeaders })
    }

}
