import { ActionTypes } from "../constants/actionType";

// actions.js
export const loginRequest = () => ({
    type: ActionTypes.LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
    type: ActionTypes.LOGIN_SUCCESS,
    payload: user,
});
export const loginFailure = (error) => ({
    type: ActionTypes.LOGIN_FAILURE,
    payload: error,
});

// signup
export const signUpRequest = () => ({
    type: ActionTypes.SIGNUP_REQUSET,
});

export const signUpSuccess = (user) => ({
    type: ActionTypes.SIGNUP_SUCCESS,
    payload: user,
});
export const signUpFailure = (error) => ({
    type: ActionTypes.SIGNUP_FAILURE,
    payload: error,
});
// LOGOUT

export const logout = () => ({
    type: ActionTypes.LOGOUT,
});

export const setToken = (token) => ({
    type: ActionTypes.SET_TOKEN,
    payload: token,
});




