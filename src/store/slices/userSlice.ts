import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    email: string | null
}

const initialState: InitialState = {
    email: null
};

export const userSlice = createSlice({
    
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            console.log(action.payload)
            state.email = action.payload
        },
        logout(state) {
            state.email = null
        }
    },
})

 export const { login, logout } = userSlice.actions;
