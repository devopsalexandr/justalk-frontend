import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenProvider} from '../services/token.provider';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenProvider: TokenProvider) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.tokenProvider.hasToken) {
      return next.handle(request);
    }

    const requestWithToken = request.clone({
      headers: request.headers.set(`Authorization`, `Bearer ${this.tokenProvider.getToken()}`)
    });
    console.log(requestWithToken);
    return next.handle(requestWithToken);
  }

}
