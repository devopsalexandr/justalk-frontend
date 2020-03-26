import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {TokenProvider} from '../services/token.provider';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

  // this routes will be show only for guests
  protected exceptRoutes: Array<string> = [
    '/',
  ];

  constructor(private tokenProvider: TokenProvider, private router: Router, private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const hasToken = this.tokenProvider.hasToken() as boolean;

    const isExceptRoute = this.exceptRoutes.includes(state.url);

    if (hasToken) {
      if (isExceptRoute) {
        return this.router.navigateByUrl('/profile');
      }
      return true;
    }

    // if user has not token
    if (isExceptRoute) {
      return true;
    }

    return this.router.navigateByUrl('/');
  }

}
