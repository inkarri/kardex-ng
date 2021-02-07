import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {RouterModule} from '@angular/router';
import {ArticulosModule} from './components/articulos/articulos.module';
import {ComprasModule} from './components/compras/compras.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    ArticulosModule,
    ComprasModule
  ]
})
export class DashboardModule { }
