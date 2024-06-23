import {
  AUTH_LOGOUT,
  ADS_CREATED,
  ADS_LOADED,
  AUTH_LOGIN_PENDING,
  AUTH_LOGIN_FULFILLED,
  AUTH_LOGIN_REJECTED,
  UI_RESET_ERROR,
} from "./types";

export const defaultState = {
  auth: false,
  ads: [],
  ui: {
    pending: false,
    error: null,
  },
};

export function ads(state = defaultState.ads, action) {
  switch (action.type) {
    case ADS_CREATED:
      console.log(action.payload);
      console.log(state);
      console.log(state.data);
      //return { data: [action.payload], ...state };
      return { ...state, data: [...state.data, action.payload] };
    case ADS_LOADED:
      return action.payload;
    default:
      return state;
  }
}

export function auth(state = defaultState.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN_FULFILLED:
      return true;
    case AUTH_LOGOUT:
      return false;
    default:
      return state;
  }
}

export function ui(state = defaultState.ui, action) {
  switch (action.type) {
    case UI_RESET_ERROR:
      return { ...state, error: null };
    case AUTH_LOGIN_PENDING:
      return { ...state, pending: true };
    case AUTH_LOGIN_FULFILLED:
      return { ...state, pending: false, error: null };
    case AUTH_LOGIN_REJECTED:
      return { ...state, pending: false, error: action.payload };
    default:
      return state;
  }
}

// const reducer = combineReducers({ auth, ads });

// export default reducer;
