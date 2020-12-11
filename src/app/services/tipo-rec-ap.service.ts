import { Injectable } from '@angular/core';

import { Tipo_Rec_Ap } from '../Clases/tipo_rec_ap';
import { Tipo_Rec_ApLow } from '../Clases/LowCase/tipo_rec_apLow';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoRecApService {

  private urlEndPoint = 'http://localhost:8086/tipos-rec-ap';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tipo_Rec_Ap[]> {
    return this.http.get(`${this.urlEndPoint}/all`).pipe(
      map(response => response['TIPOS_REC_AP'] as Tipo_Rec_Ap[])
    );
  }

  // insertando lo datos  en la base de datos
  create(Tipo_Rec_ApLow: Tipo_Rec_ApLow): Observable<any> { // devuele el objeto creado
    return this.http.post(`${this.urlEndPoint}/add`, Tipo_Rec_ApLow, { headers: this.httpHeaders }); // pasamos la url, objeto, el formato de manejo de json
  }

  // obteniendo datos por ID
  get(id: number): Observable<any> {
    return this.http.get(`${this.urlEndPoint}/${id}`)
  }

  // metodo actualizar 
  update(Tipo_Rec_ApLow: Tipo_Rec_ApLow): Observable<Tipo_Rec_ApLow> {
    return this.http.put<Tipo_Rec_ApLow>(`${this.urlEndPoint}/update/${Tipo_Rec_ApLow.id_tipo_rec_ap}`, Tipo_Rec_ApLow, { headers: this.httpHeaders })
  }

  // agregando el eliminar 
  delete(id: number): Observable<Tipo_Rec_ApLow> {
    return this.http.delete<Tipo_Rec_ApLow>(`${this.urlEndPoint}/delete/${id}`, { headers: this.httpHeaders })
  }

}
