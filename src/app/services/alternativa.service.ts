import { Injectable } from '@angular/core';

import { Alternativa } from '../Clases/alternativa';
import { AlternativaLow } from '../Clases/LowCase/alternativaLow';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlternativaService {

  private urlEndPoint = 'http://localhost:8086/alternativas';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAll(): Observable<Alternativa[]> {
    return this.http.get(`${this.urlEndPoint}/all`).pipe(
      map(response => response['ALTERNATIVAS'] as Alternativa[])
    );
  }

  // insertando lo datos  en la base de datos
  create(AlternativaLow: AlternativaLow): Observable<any> { // devuele el objeto creado
    return this.http.post(`${this.urlEndPoint}/add`, AlternativaLow, { headers: this.httpHeaders }); // pasamos la url, objeto, el formato de manejo de json
  }

  // obteniendo datos por ID
  get(id: number): Observable<any> {
    return this.http.get(`${this.urlEndPoint}/${id}`)
  }

  // metodo actualizar 
  update(AlternativaLow: AlternativaLow): Observable<AlternativaLow> {
    return this.http.put<AlternativaLow>(`${this.urlEndPoint}/update/${AlternativaLow.id_alternativa}`, AlternativaLow, { headers: this.httpHeaders })
  }

  // agregando el eliminar 
  delete(id: number): Observable<AlternativaLow> {
    return this.http.delete<AlternativaLow>(`${this.urlEndPoint}/delete/${id}`, { headers: this.httpHeaders })
  }

}
