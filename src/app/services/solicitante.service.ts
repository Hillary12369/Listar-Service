import { Injectable, Type } from '@angular/core';
import { Solicitante } from '../models/solicitante';
import { Observable, Subscription, of } from 'rxjs';
import {HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitanteService {
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  private solicitanteUrl:string = 'http://localhost:9090/solicitante';

  constructor(private http: HttpClient) { }
  

  getSolicitante():Observable<Solicitante[]>{
    return this.http.get<Solicitante[]>(this.solicitanteUrl+'/all');
  }
}

