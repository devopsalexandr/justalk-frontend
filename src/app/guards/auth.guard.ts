import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {TokenProvider} from '../services/token.provider';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';

export class AuthGuard implements CanActivate {

  constructor(private tokenProvider: TokenProvider, private router: Router, private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isLogin = this.tokenProvider.hasToken() as boolean;

    if (isLogin) {

      // switch (state.url) {
      //   case '/':
      //
      // }
      console.log(state.url);

      return true;
    }

    this.authService.logout();
    this.router.navigateByUrl('/');

    return false;
  }

}
