import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MemoizedSelector, MetaReducer } from '@ngrx/store';
// import {environment} from '../../environments/environment';
import * as fromRouter from '@ngrx/router-store';
/**
 * storeFreeze prevents state from being mutated.
 */
// import {storeFreeze} from 'ngrx-store-freeze';
import * as fromLayout from '../layout/dc-layout-reducers';
import { RouterStateUrl } from '../route/dc-route-util';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a controlType or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface DcAppState {
  layout: fromLayout.DcLayoutStateData;
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<DcAppState> = {
  layout: fromLayout.reducer,
  routerReducer: fromRouter.routerReducer
};

// console.log all actions
export function logger(reducer: ActionReducer<DcAppState>): ActionReducer<DcAppState> {
  return (state: DcAppState, action: any): DcAppState => {
    // some logging

    return reducer(state, action);
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 *
 * TODO !environment.production
 */
export const metaReducers: MetaReducer<DcAppState>[] = true ? [logger] : [];
// export const metaReducers: MetaReducer<DcLayoutStateData>[] = true ? [logger, storeFreeze] : [];

/**
 * Layout Reducers
 */
export const getLayoutState: MemoizedSelector<any, fromLayout.DcLayoutStateData> = createFeatureSelector<fromLayout.DcLayoutStateData>('layout');
export const isShowSidenav: MemoizedSelector<any, boolean> = createSelector(getLayoutState, fromLayout.getShowSidenav);
export const isHideToolbar: MemoizedSelector<any, boolean> = createSelector(getLayoutState, fromLayout.getHideToolbar);
