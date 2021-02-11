import * as auth from './dc-auth-actions';

export interface DcLoginStateData {
  error: string | null;
  pending: boolean;
}

export const initialState: DcLoginStateData = {
  error: null,
  pending: false
};

export function reducer(state = initialState, action: auth.Actions): DcLoginStateData {
  switch (action.type) {
    case auth.LOGIN: {
      return {
        ...state,
        error: null,
        pending: true
      };
    }

    case auth.LOGIN_SUCCESS: {
      return {
        ...state,
        error: null,
        pending: false
      };
    }

    case auth.LOGIN_FAILURE: {
      return {
        ...state,
        error: action.payload,
        pending: false
      };
    }

    default: {
      return state;
    }
  }
}

export const getError = (state: DcLoginStateData) => state.error;
export const getPending = (state: DcLoginStateData) => state.pending;
