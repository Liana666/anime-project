import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState: any = {
    anime: [],
    count: 0
};

export const animeSlice = createSlice({
    name: 'anime',
    initialState,
    reducers: {
        addNewAnime(state, action) {
            state.anime = [...action.payload];
        },
        addPageCount(state, action) {
            state.count = action.payload;
        }
        
    },
})

 export const { addNewAnime} = animeSlice.actions;
