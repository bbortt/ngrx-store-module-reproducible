import { Action } from '@ngrx/store';
import { DcAuthenticate, DcUser } from './dc-auth-model';

export const LOGIN = '[Auth] DcLogin';
export const LOGOUT = '[Auth] DcLogout';
export const LOGIN_SUCCESS = '[Auth] DcLogin Success';
export const LOGIN_FAILURE = '[Auth] DcLogin Failure';
export const LOGIN_REDIRECT = '[Auth] DcLogin Redirect';

export class DcLogin implements Action {
  readonly type = LOGIN;

  constructor(public payload: DcAuthenticate) {}
}

export class DcLoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: { user: DcUser }) {}
}

export class DcLoginFailure implements Action {
  readonly type = LOGIN_FAILURE;

  constructor(public payload: any) {}
}

export class DcLoginRedirect implements Action {
  readonly type = LOGIN_REDIRECT;
}

export class DcLogout implements Action {
  readonly type = LOGOUT;
}

export type Actions = DcLogin | DcLoginSuccess | DcLoginFailure | DcLoginRedirect | DcLogout;
