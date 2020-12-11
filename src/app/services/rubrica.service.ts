import { Injectable } from '@angular/core';

import { Rubrica } from '../Clases/rubrica';
import { RubricaLow } from '../Clases/LowCase/rubricaLow';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RubricaService {

  private urlEndPoint = 'http://localhost:8086/rubricas';

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    getAll(): Observable<Rubrica[]> {
        return this.http.get(`${this.urlEndPoint}/all`).pipe(
            map(response => response['RUBRICAS'] as Rubrica[])
        );
    }

    // insertando lo datos  en la base de datos
    create(RubricaLow: RubricaLow): Observable<any> { // devuele el objeto creado
        return this.http.post(`${this.urlEndPoint}/add`, RubricaLow, { headers: this.httpHeaders }); // pasamos la url, objeto, el formato de manejo de json
    }

    // obteniendo datos por ID
    get(id: number): Observable<any> {
        return this.http.get(`${this.urlEndPoint}/${id}`)
    }

    // metodo actualizar 
    update(RubricaLow: RubricaLow): Observable<RubricaLow> {
        return this.http.put<RubricaLow>(`${this.urlEndPoint}/update/${RubricaLow.id_rubrica}`, RubricaLow, { headers: this.httpHeaders })
    }

    // agregando el eliminar 
    delete(id: number): Observable<RubricaLow> {
        return this.http.delete<RubricaLow>(`${this.urlEndPoint}/delete/${id}`, { headers: this.httpHeaders })
    }

}
