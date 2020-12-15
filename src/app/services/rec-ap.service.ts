import { Injectable } from '@angular/core';

import { Rec_Ap } from '../Clases/rec_ap';
import { Rec_ApLow } from '../Clases/LowCase/rec_apLow';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecApService {

  private urlEndPoint = 'http://localhost:8086/recs-ap';

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    getAll(): Observable<Rec_Ap[]> {
        return this.http.get(`${this.urlEndPoint}/all`).pipe(
            map(response => response['RECS_AP'] as Rec_Ap[])
        );
    }

    // insertando lo datos  en la base de datos
    create(Rec_ApLow: Rec_ApLow): Observable<any> { // devuele el objeto creado
        return this.http.post(`${this.urlEndPoint}/add`, Rec_ApLow, { headers: this.httpHeaders }); // pasamos la url, objeto, el formato de manejo de json
    }

    // obteniendo datos por ID
    get(id: number): Observable<any> {
        return this.http.get(`${this.urlEndPoint}/${id}`)
    }

    // obteniendo datos por ID del Curso
    getBySesionId(id: number): Observable<any> {
        return this.http.get(`${this.urlEndPoint}/id-sesion?id=${id}`)
    }

    // obteniendo datos por ID del Curso
    getByCursoId(id: number): Observable<any> {
        return this.http.get(`${this.urlEndPoint}/id-curso?id=${id}`)
    }

    // metodo actualizar 
    update(Rec_ApLow: Rec_ApLow): Observable<Rec_ApLow> {
        return this.http.put<Rec_ApLow>(`${this.urlEndPoint}/update/${Rec_ApLow.id_rec_ap}`, Rec_ApLow, { headers: this.httpHeaders })
    }

    // agregando el eliminar 
    delete(id: number): Observable<Rec_ApLow> {
        return this.http.delete<Rec_ApLow>(`${this.urlEndPoint}/delete/${id}`, { headers: this.httpHeaders })
    }

}
