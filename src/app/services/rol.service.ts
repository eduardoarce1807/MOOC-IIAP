import { Injectable } from '@angular/core';

import { Rol } from '../Clases/rol';
import { RolLow } from '../Clases/LowCase/rolLow';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private urlEndPoint = 'http://localhost:8086/roles';

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    getAll(): Observable<Rol[]> {
        return this.http.get(`${this.urlEndPoint}/all`).pipe(
            map(response => response['ROLES'] as Rol[])
        );
    }

    // insertando lo datos  en la base de datos
    create(rolLow: RolLow): Observable<any> { // devuele el objeto creado
        return this.http.post(`${this.urlEndPoint}/add`, rolLow, { headers: this.httpHeaders }); // pasamos la url, objeto, el formato de manejo de json
    }

    // obteniendo datos por ID
    get(id: number): Observable<any> {
        return this.http.get(`${this.urlEndPoint}/${id}`)
    }

    // metodo actualizar 
    update(rolLow: RolLow): Observable<RolLow> {
        return this.http.put<RolLow>(`${this.urlEndPoint}/update/${rolLow.id_rol}`, rolLow, { headers: this.httpHeaders })
    }

    // agregando el eliminar 
    delete(id: number): Observable<RolLow> {
        return this.http.delete<RolLow>(`${this.urlEndPoint}/delete/${id}`, { headers: this.httpHeaders })
    }

}
