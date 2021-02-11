import * as layout from './dc-layout-actions';

export interface DcLayoutStateData {
  showSidenav: boolean;
  hideToolbar: boolean;
}

const initialState: DcLayoutStateData = { showSidenav: false, hideToolbar: false };

export function reducer(state = initialState, action: layout.Actions): DcLayoutStateData {
  switch (action.type) {
    case layout.CLOSE_SIDENAV:
      return {
        showSidenav: false,
        hideToolbar: false
      };

    case layout.OPEN_SIDENAV:
      return {
        showSidenav: true,
        hideToolbar: false
      };

    case layout.HIDE_TOOLBAR:
      return {
        showSidenav: false,
        hideToolbar: true
      };

    default:
      return state;
  }
}

export const getShowSidenav = (state: DcLayoutStateData) => state.showSidenav;
export const getHideToolbar = (state: DcLayoutStateData) => state.hideToolbar;
