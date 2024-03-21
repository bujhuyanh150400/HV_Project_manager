import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import LoginReducer from "~/redux/reducers/loginSlice";
import LoadingReducer from "~/redux/reducers/LoadingSlice";
import ToastReducer from "~/redux/reducers/ToastSlice";

const persistConfig = {
    key: 'HVBASE',
    version: 1,
    storage,
    whitelist: ['login'], // chỉ lưu trữ trạng thái login
}

const rootReducer = combineReducers({
    loading: LoadingReducer,
    toast: ToastReducer,
    login: LoginReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)
