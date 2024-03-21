import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
    name: 'login',
    initialState: {
        token: null,
        currentUser: null,
        isLogin: false,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.isLogin = true;
            state.currentUser = action.payload.user;
            state.token = action.payload.access_token;
        },
        loginFailed: (state) => {
            state.isLogin = false;
            state.currentUser = null;
            state.token = null;
        },
        logOut: (state) => {
            state.isFetching = false;
            state.currentUser = null;
            state.token = null;
        },
    },
})
export const {
    loginSuccess,
    loginFailed,
    logOut
} = LoginSlice.actions

export default LoginSlice.reducer