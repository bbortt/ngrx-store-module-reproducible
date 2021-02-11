import { Injectable } from '@angular/core';
import { Observable, of, throwError as _throw } from 'rxjs';
import { DcAuthenticate, DcUser } from '../dc-auth-model';

@Injectable()
export class DcAuthService {
  constructor() {}

  login({ username, password }: DcAuthenticate): Observable<DcUser> {
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    if (username !== 'Gast') {
      return _throw('Invalid username or password');
    }

    return of({ name: username });
  }

  logout() {
    return of(true);
  }
}
