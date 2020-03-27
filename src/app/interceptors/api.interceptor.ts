import {Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(@Inject('BASE_HOST') private baseUrl: string) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const requestWithBaseUrl = request.clone({ url: this.baseUrl + request.url });

    return next.handle(requestWithBaseUrl);
  }

}
