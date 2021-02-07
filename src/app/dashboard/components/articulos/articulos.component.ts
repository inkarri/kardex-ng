import {Component, OnInit} from '@angular/core';
import {ArticulosService} from './services/articulos.service';
import {Articulos} from './models/articulos';
import {ArticulosConstant} from './constans/articulos.constant';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent implements OnInit {

  articulos: Articulos[];
  tableHeaders = ArticulosConstant.table.headers;
  titles = ArticulosConstant.titles;
  nuevoArticlo: Articulos;

  constructor(private articuloService: ArticulosService, private messageService: ToastrService, private loading: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.nuevoArticlo = {};
    this.nuevoArticlo.clasificacionPk = 1;
    this.articulos = [];
    this.articuloService.obtenerArticulos().subscribe(data => {
      this.articulos = data;
    });
  }

  registrarArticulo(): void {
    this.loading.show();
    this.articuloService.registrarArticulo(this.nuevoArticlo).subscribe(() => {
      this.nuevoArticlo = {};
      this.messageService.info(this.titles.registro);
      this.articuloService.obtenerArticulos().subscribe(data => {
        this.articulos = data;
        this.loading.hide();
      });
    });
  }

}
