import * as auth from './dc-auth-actions';
import { DcUser } from './dc-auth-model';

export interface DcAuthStateData {
  loggedIn: boolean;
  user: DcUser | null;
}

export const initialState: DcAuthStateData = {
  loggedIn: true,
  user: null
};

export function reducer(state = initialState, action: auth.Actions): DcAuthStateData {
  switch (action.type) {
    case auth.LOGIN_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user
      };
    }

    case auth.LOGOUT: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export const getLoggedIn = (state: DcAuthStateData) => state.loggedIn;
export const getUser = (state: DcAuthStateData) => state.user;
