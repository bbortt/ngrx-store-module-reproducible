import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DcAuthService } from './services/dc-auth.service';
import * as Auth from './dc-auth-actions';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class DcAuthEffects {
  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(Auth.LOGIN),
    map((action: Auth.DcLogin) => action.payload),
    exhaustMap((auth: any) =>
      this.authService.login(auth).pipe(
        map((user: any) => new Auth.DcLoginSuccess({ user })),
        catchError((error: any) => of(new Auth.DcLoginFailure(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(Auth.LOGIN_SUCCESS),
    tap(() => {
      this.router.navigate(['/']);
    })
  );

  @Effect({ dispatch: false })
  loginRedirect$: Observable<Action> = this.actions$.pipe(
    ofType(Auth.LOGIN_REDIRECT, Auth.LOGOUT),
    tap((authed) => {
      this.router.navigate(['/login']);
    })
  );

  constructor(private actions$: Actions, private authService: DcAuthService, private router: Router) {}
}
