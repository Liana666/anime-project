import { createSlice } from "@reduxjs/toolkit";

import { ItemAnime } from './../../types/types';

type States = {
    anime: [] | ItemAnime[]
    count: number
};

const initialState: States = {
    anime: [],
    count: 0
};

export const animeSlice = createSlice({
    name: 'anime',
    initialState,
    reducers: {
        addNewAnime(state, action) {
            state.anime = action.payload ? [...action.payload] : [];
        },
        addPageCount(state, action) {
            state.count = action.payload;
        }

    },
})

export const { addNewAnime } = animeSlice.actions;
