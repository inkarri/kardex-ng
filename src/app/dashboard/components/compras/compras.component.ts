import {Component, OnInit} from '@angular/core';
import {Articulos} from '../articulos/models/articulos';
import {ComprasService} from './services/compras.service';
import {ComprasConstant} from './constans/compras.constant';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';
import {TipoPago} from './models/tipoPago';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {

  articulos: Articulos[];
  tipoPagos: TipoPago[];
  tableHeaders = ComprasConstant.table.headers;
  titles = ComprasConstant.titles;
  articulosSeleccionados: Articulos[];
  tableHeadersCompra = ComprasConstant.table.headersCompra;
  tipoPagoSeleccionado: TipoPago;

  constructor(private cmprasService: ComprasService, private messageService: ToastrService, private loading: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.articulos = [];
    this.cmprasService.obtenerArticulosConExistencia().subscribe(data => {
      this.articulos = data;
    });
    this.cmprasService.obtenerTipoPagos().subscribe(data => {
      this.tipoPagos = data;
      this.tipoPagoSeleccionado = this.tipoPagos[0];
    });
  }

  validarExistencia(articulo: Articulos): void {
    if (articulo.cantidad > articulo.existencia) {
      this.messageService.info(this.titles.sinExistencia);
    }
  }

  comprar() {

  }
}
