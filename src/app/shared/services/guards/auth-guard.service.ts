import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth: AuthService,
    private router: Router) {
  }
  canActivate(): boolean {

    if (this.auth.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['login']);
      // se puede guardar el url aca y cuando el login sea exitoso redireccionarlo
      // nuevamente a ese url.
      console.log('Guard');
      return false;
    }
  }
}
