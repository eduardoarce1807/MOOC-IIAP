import { Injectable } from '@angular/core';

import { Rol_UsuLow } from '../Clases/LowCase/rol_usuLow';
import { Rol_Usu } from '../Clases/rol_usu';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolUsuService {

  private urlEndPoint = 'http://localhost:8086/roles-usu';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAll(): Observable<Rol_Usu[]> {
    return this.http.get(`${this.urlEndPoint}/all`).pipe(
      map(response => response['USUARIOS'] as Rol_Usu[])
    );
  }

  // insertando lo datos  en la base de datos
  create(rol_usuLow: Rol_UsuLow): Observable<any> { // devuele el objeto creado
    return this.http.post(`${this.urlEndPoint}/add`, rol_usuLow, { headers: this.httpHeaders }); // pasamos la url, objeto, el formato de manejo de json
  }

  // obteniendo datos por ID
  get(id: number): Observable<any> {
    return this.http.get(`${this.urlEndPoint}/${id}`)
  }

  // obteniendo datos por ID de Usuario
  getUsu(id: number): Observable<any> {
    return this.http.get(`${this.urlEndPoint}/usu/${id}`)
  }

  // metodo actualizar 
  update(rol_usuLow: Rol_UsuLow): Observable<Rol_UsuLow> {
    return this.http.put<Rol_UsuLow>(`${this.urlEndPoint}/update/${rol_usuLow.id_rol_usu}`, rol_usuLow, { headers: this.httpHeaders })
  }

  // agregando el eliminar 
  delete(id: number): Observable<Rol_UsuLow> {
    return this.http.delete<Rol_UsuLow>(`${this.urlEndPoint}/delete/${id}`, { headers: this.httpHeaders })
  }
}
