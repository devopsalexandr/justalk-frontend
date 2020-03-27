import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {TokenProvider} from './token.provider';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private tokenProvider: TokenProvider) {
  }

  public login(phone: string): Observable<void> {

    const body = {
      phoneNumber: phone
    };

    return this.http.post<void>('https://localhost:5001/api/auth/login', body)
      .pipe(
        tap(resp => console.log(resp))
      );
  }

  public confirm(phoneNumber: string, codeVerification: string): Observable<void> {

    const body = {
      phoneNumber,
      codeVerification
    };

    return this.http.post<void>('https://localhost:5001/api/auth/confirm', body)
      .pipe(
        tap((resp: any) => {
          this.tokenProvider.setToken(resp.data.accessToken);
        })
      );
  }

  public logout(): Observable<void> {
    return this.http.post<void>('https://localhost:5001/api/auth/logout', {})
      .pipe(
        tap(() => this.tokenProvider.clearToken())
      );
  }
}
