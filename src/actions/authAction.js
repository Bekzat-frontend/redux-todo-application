import { LOGIN_SUCCESS, LOGOUT } from "./actionTypes";

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const logout = () => ({
  type: LOGOUT,
});
