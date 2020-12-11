import { Injectable } from '@angular/core';

import { Sesion } from '../Clases/sesion';
import { SesionLow } from '../Clases/LowCase/sesionLow';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  private urlEndPoint = 'http://localhost:8086/sesiones';

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    getAll(): Observable<Sesion[]> {
        return this.http.get(`${this.urlEndPoint}/all`).pipe(
            map(response => response['SESIONES'] as Sesion[])
        );
    }

    // insertando lo datos  en la base de datos
    create(SesionLow: SesionLow): Observable<any> { // devuele el objeto creado
        return this.http.post(`${this.urlEndPoint}/add`, SesionLow, { headers: this.httpHeaders }); // pasamos la url, objeto, el formato de manejo de json
    }

    // obteniendo datos por ID
    get(id: number): Observable<any> {
        return this.http.get(`${this.urlEndPoint}/${id}`)
    }

    // metodo actualizar 
    update(SesionLow: SesionLow): Observable<SesionLow> {
        return this.http.put<SesionLow>(`${this.urlEndPoint}/update/${SesionLow.id_sesion}`, SesionLow, { headers: this.httpHeaders })
    }

    // agregando el eliminar 
    delete(id: number): Observable<SesionLow> {
        return this.http.delete<SesionLow>(`${this.urlEndPoint}/delete/${id}`, { headers: this.httpHeaders })
    }

}
