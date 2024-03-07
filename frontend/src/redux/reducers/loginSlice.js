import {createSlice} from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
    name:'login',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
})

export default LoginSlice.reducer