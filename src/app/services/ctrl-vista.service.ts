import { Injectable } from '@angular/core';

import { Ctrl_Vista } from '../Clases/ctrl_vista';
import { Ctrl_VistaLow } from '../Clases/LowCase/ctrl_vistaLow';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CtrlVistaService {

  private urlEndPoint = 'http://localhost:8086/ctrl-vistas';

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    getAll(): Observable<Ctrl_Vista[]> {
        return this.http.get(`${this.urlEndPoint}/all`).pipe(
            map(response => response['CTRL_VISTAS'] as Ctrl_Vista[])
        );
    }

    // insertando lo datos  en la base de datos
    create(Ctrl_VistaLow: Ctrl_VistaLow): Observable<any> { // devuele el objeto creado
        return this.http.post(`${this.urlEndPoint}/add`, Ctrl_VistaLow, { headers: this.httpHeaders }); // pasamos la url, objeto, el formato de manejo de json
    }

    // obteniendo datos por ID
    get(id: number): Observable<any> {
        return this.http.get(`${this.urlEndPoint}/${id}`)
    }

    // obteniendo datos por ID
    getByIdRecAp(id: number): Observable<any> {
        return this.http.get(`${this.urlEndPoint}/rec-ap?id=${id}`)
    }

    // metodo actualizar 
    update(Ctrl_VistaLow: Ctrl_VistaLow): Observable<Ctrl_VistaLow> {
        return this.http.put<Ctrl_VistaLow>(`${this.urlEndPoint}/update/${Ctrl_VistaLow.id_ctrl_vista}`, Ctrl_VistaLow, { headers: this.httpHeaders })
    }

    // agregando el eliminar 
    delete(id: number): Observable<Ctrl_VistaLow> {
        return this.http.delete<Ctrl_VistaLow>(`${this.urlEndPoint}/delete/${id}`, { headers: this.httpHeaders })
    }

}
