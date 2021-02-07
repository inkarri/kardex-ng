import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = '/kardexapp/';
  }

  public obtenerPedidosPorUsuario(): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
    const userName = localStorage.getItem('userName');
    const url = `${this.baseUrl}kardex/obtenerPedidosPorUsuario/${userName}`;
    return this.http.get<any[]>(url, {headers});
  }

}
