import { Injectable } from '@angular/core';

import { UsuCur } from '../Clases/usu_cur';
import { UsuCurLow } from '../Clases/LowCase/usu_curLow';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuCurService {

  private urlEndPoint = 'http://localhost:8086/usu-cur';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAll(): Observable<UsuCur[]> {
    return this.http.get(`${this.urlEndPoint}/all`).pipe(
      map(response => response['USU_CUR'] as UsuCur[])
    );
  }

  // insertando lo datos  en la base de datos
  create(UsuCurLow: UsuCurLow): Observable<any> { // devuele el objeto creado
    return this.http.post(`${this.urlEndPoint}/add`, UsuCurLow, { headers: this.httpHeaders }); // pasamos la url, objeto, el formato de manejo de json
  }

  // obteniendo datos por ID
  get(id: number): Observable<any> {
    return this.http.get(`${this.urlEndPoint}/${id}`)
  }

  // obteniendo datos por ID
  getByCurId(id: number): Observable<any> {
    return this.http.get(`${this.urlEndPoint}/id-cur?id=${id}`)
  }

  // obteniendo datos por ID
  getByUsuId(id: number): Observable<any> {
    return this.http.get(`${this.urlEndPoint}/id-usu?id=${id}`)
  }

  // metodo actualizar 
  update(UsuCurLow: UsuCurLow): Observable<UsuCurLow> {
    return this.http.put<UsuCurLow>(`${this.urlEndPoint}/update/${UsuCurLow.id_usu_cur}`, UsuCurLow, { headers: this.httpHeaders })
  }

  // agregando el eliminar 
  delete(id: number): Observable<UsuCurLow> {
    return this.http.delete<UsuCurLow>(`${this.urlEndPoint}/delete/${id}`, { headers: this.httpHeaders })
  }

}
