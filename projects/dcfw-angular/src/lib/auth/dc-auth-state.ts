import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import * as fromRoot from '../app/dc-app-state';
import * as fromAuth from './dc-auth-state-auth';
import * as fromLoginPage from './dc-auth-state-login-page';
import { DcUser } from './dc-auth-model';

export interface DcAuthStateData {
  status: fromAuth.DcAuthStateData;
  loginPage: fromLoginPage.DcLoginStateData;
}

export interface DcAuthState extends fromRoot.DcAppState {
  auth: DcAuthStateData;
}

export const reducers = {
  status: fromAuth.reducer,
  loginPage: fromLoginPage.reducer
};

// auth
export const selectAuthState = createFeatureSelector<DcAuthStateData>('auth');

export const selectAuthStatusState: MemoizedSelector<any, fromAuth.DcAuthStateData> = createSelector(selectAuthState, (state: DcAuthStateData) => state.status);
export const getLoggedIn: MemoizedSelector<any, boolean> = createSelector(selectAuthStatusState, fromAuth.getLoggedIn);
export const getUser: MemoizedSelector<any, DcUser> = createSelector(selectAuthStatusState, fromAuth.getUser);

export const selectLoginPageState: MemoizedSelector<any, fromLoginPage.DcLoginStateData> = createSelector(selectAuthState, (state: DcAuthStateData) => state.loginPage);
export const getLoginPageError: MemoizedSelector<DcAuthState, string> = createSelector(selectLoginPageState, fromLoginPage.getError);
export const getLoginPagePending: MemoizedSelector<DcAuthState, boolean> = createSelector(selectLoginPageState, fromLoginPage.getPending);
