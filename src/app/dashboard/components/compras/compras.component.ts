import {Component, OnInit} from '@angular/core';
import {Articulos} from '../articulos/models/articulos';
import {ComprasService} from './services/compras.service';
import {ComprasConstant} from './constans/compras.constant';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';
import {TipoPago} from './models/tipoPago';
import {Pedido} from './models/pedido';
import {DetallePedido} from './models/detallePedido';

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

  comprar(): void {
    try {
      this.vlidarCantidadIngresada();
      this.loading.show();
      this.cmprasService.comprarArticulos(this.crearParametroPedido()).subscribe(() => {
        this.articulosSeleccionados = [];
        this.messageService.info(this.titles.registro);
        this.cmprasService.obtenerArticulosConExistencia().subscribe(data => {
          this.articulos = data;
          this.loading.hide();
        });
      });
    } catch (e) {
      this.messageService.error(e.message);
    }
  }

  private vlidarCantidadIngresada(): void {
    for (const articulo of this.articulosSeleccionados) {
      if (!articulo.cantidad  || articulo.cantidad <= 0) {
        throw new Error(this.titles.sinCantdad);
      }
    }
  }

  crearParametroPedido(): Pedido {
    const detallePeddo: DetallePedido[] = [];
    this.articulosSeleccionados.forEach(articulo => {
      detallePeddo.push({
        articuloPk: articulo.articuloPk,
        cantidad: articulo.cantidad,
        precio: articulo.precio,
        existencia: articulo.existencia
      });
    });
    return {
      tipoPagoPk: this.tipoPagoSeleccionado.tipoPagoPk,
      detallePedido: detallePeddo
    };
  }

}
