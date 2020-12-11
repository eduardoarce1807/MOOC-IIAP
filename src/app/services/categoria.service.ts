import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Categoria } from '../Clases/categoria';
import { CategoriaLow } from '../Clases/LowCase/categoriaLow';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class CategoriaService{

    private urlEndPoint = 'http://localhost:8086/categorias';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAll(): Observable<Categoria[]> {
      return this.http.get(`${this.urlEndPoint}/all`).pipe(
          map(response => response['CATEGORIAS'] as Categoria[])
      );
  }

  // insertando lo datos  en la base de datos
  create(categoriaLow: CategoriaLow): Observable<any> { // devuele el objeto creado
      return this.http.post(`${this.urlEndPoint}/add`, categoriaLow, { headers: this.httpHeaders }); // pasamos la url, objeto, el formato de manejo de json
  }

  // obteniendo datos por ID
  get(id: number): Observable<any> {
      return this.http.get(`${this.urlEndPoint}/${id}`)
  }

  // metodo actualizar 
  update(categoriaLow: CategoriaLow): Observable<CategoriaLow> {
      return this.http.put<CategoriaLow>(`${this.urlEndPoint}/update/${categoriaLow.id_categoria}`, categoriaLow, { headers: this.httpHeaders })
  }

  // agregando el eliminar 
  delete(id: number): Observable<CategoriaLow> {
      return this.http.delete<CategoriaLow>(`${this.urlEndPoint}/delete/${id}`, { headers: this.httpHeaders })
  }

}

