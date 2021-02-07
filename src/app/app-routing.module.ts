import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PrivatePageGuardServiceService} from './login/services/private-page-guard-service.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './dashboard/components/home/home.component';
import {ArticulosComponent} from './dashboard/components/articulos/articulos.component';
import {ComprasComponent} from './dashboard/components/compras/compras.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [PrivatePageGuardServiceService],
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'articulos', component: ArticulosComponent},
      {path: 'compras', component: ComprasComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
