import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {TokenProvider} from '../services/token.provider';
import {Router} from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private tokenProvider: TokenProvider, private router: Router) {
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
  return next.handle(request).pipe(
      catchError((response: HttpErrorResponse) => {

        switch (response.status) {
          case 401:
            console.log('catched error 401');
            this.router.navigateByUrl('/');
            return of();

          default:
            return throwError(response.error);
        }

      })
    );

  }

}
