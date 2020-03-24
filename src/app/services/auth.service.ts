import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
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
}
