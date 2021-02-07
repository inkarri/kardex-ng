import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthServiceService} from './services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mombreUsuario: string = 'admin';
  clave: string = 'password';
  errorMessage: string;

  constructor(private authService: AuthServiceService, private router: Router) {
  }

  ngOnInit(): void {
  }


  login(): void {
    this.authService.login(this.mombreUsuario, this.clave)
      .subscribe(response => {
        console.log('TOKEN: ' + response.headers.get('Authorization'));
        localStorage.setItem('token', response.headers.get('Authorization'));
        this.router.navigate(['/dashboard/home']);
      }, err => {
        console.log('ususario o contraseña incorrecto');
        this.errorMessage = 'Nombre de usuario contraseña incorrecto';
      });
  }

}
