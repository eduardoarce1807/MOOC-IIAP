import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Categoria } from '../Clases/categoria';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class CategoriaService{

    private urlEndPoint = 'http://localhost:8086/categorias/all';

    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    constructor ( private http: HttpClient ){}

    getCategorias(): Observable<Categoria[]> {
        return this.http.get(this.urlEndPoint).pipe(
            map(response => response['CATEGORIAS'] as Categoria[])
        );
    }

}

