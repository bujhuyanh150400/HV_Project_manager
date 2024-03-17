import {createSlice} from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
    name: 'login',
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.error = false;
        },
        loginFailed: (state) => {
            state.isFetching = false;
            state.error = false;
        }
    },
})
export const {
    loginStart,
    loginSuccess,
    loginFailed,
} = LoginSlice.actions
export default LoginSlice.reducer