import { createSlice } from "@reduxjs/toolkit";

import { Anime } from './../../types/types';   
 
type Item = {
    email: string 
    anime: Anime[]
}
    
type InitialState = {
    email: string 
    items: Item[]
}
     
const initialState: InitialState = {
    email: '',
    items: []
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addFavoriteAnime(state, action) {
            console.log(action.payload)
            if(state.items.length === 0) {
                state.items.push({
                    email: state.email,
                    anime: [action.payload]
                })
            } else {
                state.items.forEach((element, index) => {
                    if (element.email === state.email) {
                        state.items[index].anime.push(action.payload)
                    } else if (!state.items.some(item => item.email === state.email)){
                        state.items.push({
                            email: state.email,
                            anime: [action.payload]
                        })
                    }
                });
            }
        },

        removeFavoriteAnime(state, action) {
           state.items.forEach(item => {
                if(item.email === state.email)  {
                item.anime = item.anime.filter(anime => anime.id !== action.payload)
                }    
            })
        },
        clearFavoriteAnime(state) {
            state.items = [];
        },
        
        login(state, action) {
            state.email = action.payload;
        },

        logout(state) {
            state.email = '';
        }
    },
})

export const { addFavoriteAnime, removeFavoriteAnime, clearFavoriteAnime, login, logout } = userSlice.actions;
