import { createSlice } from "@reduxjs/toolkit";

import { Anime } from './../../types/types';   
 
type Item = {
    email: string 
    ids: number[]
}
    
type InitialState = {
    email: string 
    items: Item[]
}
     
const initialState: InitialState = {
    email: '',
    items:[]
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addFavoriteAnime(state, action) {
  
            if(state.items.length === 0) {
                state.items.push({
                    email: state.email,
                    ids: [action.payload.id]
                })
            } else {
                state.items.forEach((element, index) => {
                    if (element.email === state.email) {
                        state.items[index].ids.push(action.payload.id)
                    } else if (!state.items.some(item => item.email === state.email)){
                        state.items.push({
                            email: state.email,
                            ids: [action.payload.id]
                        })
                    }
                });
            }
        },

        removeFavoriteAnime(state, action) {
           state.items.forEach(item => {
                if(item.email === state.email)  {
                let myIndex = item.ids.indexOf(action.payload.id);
                item.ids.splice(myIndex, 1);
                console.log(item.ids);
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
