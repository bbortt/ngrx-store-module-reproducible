import { Action } from '@ngrx/store';

export const OPEN_SIDENAV = '[Layout] Open Sidenav';
export const CLOSE_SIDENAV = '[Layout] Close Sidenav';
export const HIDE_TOOLBAR = '[Layout] Hide Toolbar';

export class OpenSidenav implements Action {
  readonly type = OPEN_SIDENAV;
}

export class CloseSidenav implements Action {
  readonly type = CLOSE_SIDENAV;
}

export class HideToolbar implements Action {
  readonly type = HIDE_TOOLBAR;
}

export type Actions = OpenSidenav | CloseSidenav | HideToolbar;
