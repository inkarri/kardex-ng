import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Articulos} from '../../articulos/models/articulos';
import {TipoPago} from '../models/tipoPago';
import {Pedido} from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = '/kardexapp/';
  }

  public obtenerArticulosConExistencia(): Observable<Articulos[]> {
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
    const url = `${this.baseUrl}kardex/obtenerArticulosConExistencia`;
    return this.http.get<Articulos[]>(url, {headers});
  }

  public obtenerTipoPagos(): Observable<TipoPago[]> {
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
    const url = `${this.baseUrl}kardex/obtenerTiposPago`;
    return this.http.get<TipoPago[]>(url, {headers});
  }

  comprarArticulos(pedido: Pedido): Observable<void> {
    const url = `${this.baseUrl}kardex/comprar`;
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
    pedido.username = localStorage.getItem('userName');
    return this.http.post<void>(url, pedido, {headers});
  }

}
