import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DjangoapiService {

  apiURL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get(this.apiURL + '/usuarios/').pipe(retry(3));
  }

  crearUsuario(usuarioData: any): Observable<any> {
    return this.http.post(this.apiURL + '/usuarios/', usuarioData);
  }

  validarCredenciales(username: string, password: string): Observable<any> {
    const endpoint = `${this.apiURL}/autenticar/`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(endpoint, { username, password }, { headers });
  }
}