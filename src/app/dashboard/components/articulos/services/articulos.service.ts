import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Articulos} from '../models/articulos';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = '/kardexapp/';
  }

  public obtenerArticulos(): Observable<Articulos[]> {
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
    const url = `${this.baseUrl}kardex/obtenerArticulos`;
    return this.http.get<Articulos[]>(url, {headers});
  }

  registrarArticulo(articulo: Articulos): Observable<void> {
    const url = `${this.baseUrl}kardex/insertarArticulo`;
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
    return this.http.post<void>(url, articulo, { headers });
  }

}
