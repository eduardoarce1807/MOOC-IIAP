import { Injectable } from '@angular/core';

import { Usuario } from '../Clases/usuario';
import { UsuarioLow } from '../Clases/LowCase/usuarioLow';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    private urlEndPoint = 'http://localhost:8086/usuarios';

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    getAll(): Observable<Usuario[]> {
        return this.http.get(`${this.urlEndPoint}/all`).pipe(
            map(response => response['USUARIOS'] as Usuario[])
        );
    }

    // insertando lo datos  en la base de datos
    create(usuarioLow: UsuarioLow): Observable<any> { // devuele el objeto creado
        return this.http.post(`${this.urlEndPoint}/add`, usuarioLow, { headers: this.httpHeaders }); // pasamos la url, objeto, el formato de manejo de json
    }

    // insertando lo datos  en la base de datos
    createR(usuarioLow: UsuarioLow, id_rol: number): Observable<any> { // devuele el objeto creado
        return this.http.post(`${this.urlEndPoint}/addR?id=${id_rol}`, usuarioLow, { headers: this.httpHeaders }); // pasamos la url, objeto, el formato de manejo de json
    }

    // obteniendo datos por ID
    get(id: number): Observable<any> {
        return this.http.get(`${this.urlEndPoint}/${id}`)
    }

    // obteniendo datos por DNI
    getByDni(Dni: string): Observable<any> {
        return this.http.get(`${this.urlEndPoint}/dni?dni=${Dni}`)
    }

    // obteniendo datos por DNI
    getByUsu(usu: string): Observable<any> {
        return this.http.get(`${this.urlEndPoint}/usu?usu=${usu}`)
    }

    // metodo actualizar 
    update(usuarioLow: UsuarioLow): Observable<UsuarioLow> {
        return this.http.put<UsuarioLow>(`${this.urlEndPoint}/update/${usuarioLow.id_usuario}`, usuarioLow, { headers: this.httpHeaders })
    }

    // agregando el eliminar 
    delete(id: number): Observable<UsuarioLow> {
        return this.http.delete<UsuarioLow>(`${this.urlEndPoint}/delete/${id}`, { headers: this.httpHeaders })
    }

}
