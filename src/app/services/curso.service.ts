import { Injectable } from '@angular/core';

import { Curso } from '../Clases/curso';
import { CursoLow } from '../Clases/LowCase/cursoLow';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private urlEndPoint = 'http://localhost:8086/usuarios';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAll(): Observable<Curso[]> {
      return this.http.get(`${this.urlEndPoint}/all`).pipe(
          map(response => response['CURSOS'] as Curso[])
      );
  }

  // insertando lo datos  en la base de datos
  create(cursoLow: CursoLow): Observable<any> { // devuele el objeto creado
      return this.http.post(`${this.urlEndPoint}/add`, cursoLow, { headers: this.httpHeaders }); // pasamos la url, objeto, el formato de manejo de json
  }

  // obteniendo datos por ID
  get(id: number): Observable<any> {
      return this.http.get(`${this.urlEndPoint}/${id}`)
  }

  // metodo actualizar 
  update(cursoLow: CursoLow): Observable<CursoLow> {
      return this.http.put<CursoLow>(`${this.urlEndPoint}/update/${cursoLow.id_usuario}`, cursoLow, { headers: this.httpHeaders })
  }

  // agregando el eliminar 
  delete(id: number): Observable<CursoLow> {
      return this.http.delete<CursoLow>(`${this.urlEndPoint}/delete/${id}`, { headers: this.httpHeaders })
  }
}
