import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Clientes } from '../components/clientes/clientes';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ClienteService{

    private urlEndPoint = 'http://localhost:8081/api/clientes';

    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    constructor ( private http: HttpClient ){}

    getClientes(): Observable<Clientes[]> {
        return this.http.get(this.urlEndPoint).pipe(
            map(response => response as Clientes[])
        );
    }

}

