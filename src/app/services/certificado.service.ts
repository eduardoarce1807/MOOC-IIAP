import { Injectable } from '@angular/core';

import { Certificado } from '../Clases/certificado';
import { CertificadoLow } from '../Clases/LowCase/certificadoLow';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {

  private urlEndPoint = 'http://localhost:8086/certificados';

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    getAll(): Observable<Certificado[]> {
        return this.http.get(`${this.urlEndPoint}/all`).pipe(
            map(response => response['CERTIFICADOS'] as Certificado[])
        );
    }

    // insertando lo datos  en la base de datos
    create(CertificadoLow: CertificadoLow): Observable<any> { // devuele el objeto creado
        return this.http.post(`${this.urlEndPoint}/add`, CertificadoLow, { headers: this.httpHeaders }); // pasamos la url, objeto, el formato de manejo de json
    }

    // obteniendo datos por ID
    get(id: number): Observable<any> {
        return this.http.get(`${this.urlEndPoint}/${id}`)
    }

    // metodo actualizar 
    update(CertificadoLow: CertificadoLow): Observable<CertificadoLow> {
        return this.http.put<CertificadoLow>(`${this.urlEndPoint}/update/${CertificadoLow.id_certificado}`, CertificadoLow, { headers: this.httpHeaders })
    }

    // agregando el eliminar 
    delete(id: number): Observable<CertificadoLow> {
        return this.http.delete<CertificadoLow>(`${this.urlEndPoint}/delete/${id}`, { headers: this.httpHeaders })
    }

}
