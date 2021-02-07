import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthServiceService} from './auth-service.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrivatePageGuardServiceService implements CanActivate {

  constructor(private router: Router, private authService: AuthServiceService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isLogged()) {
      this.router.navigate(['/login']);
    }
    return this.authService.isLogged();
  }

}
