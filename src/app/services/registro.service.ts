import { Injectable } from '@angular/core';

import { Registro } from '../Clases/registro';
import { RegistroLow } from '../Clases/LowCase/registroLow';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private urlEndPoint = 'http://localhost:8086/registros';

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    getAll(): Observable<Registro[]> {
        return this.http.get(`${this.urlEndPoint}/all`).pipe(
            map(response => response['REGISTROS'] as Registro[])
        );
    }

    // insertando lo datos  en la base de datos
    create(RegistroLow: RegistroLow): Observable<any> { // devuele el objeto creado
        return this.http.post(`${this.urlEndPoint}/add`, RegistroLow, { headers: this.httpHeaders }); // pasamos la url, objeto, el formato de manejo de json
    }

    // obteniendo datos por ID
    get(id: number): Observable<any> {
        return this.http.get(`${this.urlEndPoint}/${id}`)
    }

    // metodo actualizar 
    update(RegistroLow: RegistroLow): Observable<RegistroLow> {
        return this.http.put<RegistroLow>(`${this.urlEndPoint}/update/${RegistroLow.id_registro}`, RegistroLow, { headers: this.httpHeaders })
    }

    // agregando el eliminar 
    delete(id: number): Observable<RegistroLow> {
        return this.http.delete<RegistroLow>(`${this.urlEndPoint}/delete/${id}`, { headers: this.httpHeaders })
    }

}
