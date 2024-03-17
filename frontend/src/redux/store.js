import {configureStore} from '@reduxjs/toolkit';
import LoginReducer from "~/redux/reducers/loginSlice";
import LoadingReducer from "~/redux/reducers/LoadingSlice";
import ToastReducer from "~/redux/reducers/ToastSlice";
export const store = configureStore({
    reducer: {
        login: LoginReducer,
        loading: LoadingReducer,
        toast : ToastReducer
    }
});