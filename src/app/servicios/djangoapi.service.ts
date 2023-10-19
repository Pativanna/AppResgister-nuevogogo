import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DjangoapiService {

  apiURL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get(this.apiURL + '/lista_usuarios').pipe(retry(3));
  }

  crearUsuario(usuarioData: any): Observable<any> {
    return this.http.post(this.apiURL + '/lista_usuarios', usuarioData);
  }
}