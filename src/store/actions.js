import {
  AUTH_LOGOUT,
  ADS_CREATED,
  ADS_LOADED,
  AUTH_LOGIN_PENDING,
  AUTH_LOGIN_FULFILLED,
  AUTH_LOGIN_REJECTED,
  UI_RESET_ERROR,
} from "./types";

export const authLoginPending = () => ({
  type: AUTH_LOGIN_PENDING,
});

export const authLoginFulfilled = () => ({
  type: AUTH_LOGIN_FULFILLED,
});

export const authLoginRejected = (error) => ({
  type: AUTH_LOGIN_REJECTED,
  payload: error,
  error: true,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export const adsCreated = (ad) => ({
  type: ADS_CREATED,
  payload: ad,
});

export const adsLoaded = (ads) => ({
  type: ADS_LOADED,
  payload: ads,
});

export const uiResetError = () => ({
  type: UI_RESET_ERROR,
});
