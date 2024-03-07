import {configureStore} from '@reduxjs/toolkit';
import LoginReducer from "~/redux/reducers/loginSlice.js";

export const store = configureStore({
    reducer: {
        login: LoginReducer,
    }
});