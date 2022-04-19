import { createSlice } from "@reduxjs/toolkit";

import { InitialStateUsersType } from './../../types/types';

const initialState: InitialStateUsersType = {
    email: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            state.email = action.payload.email
        },
        logout(state) {
            state.email = null
        }
    },
})

//export default userSlice.reducer;

 export const { login, logout } = userSlice.actions;
