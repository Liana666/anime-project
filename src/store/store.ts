import { addNewAnime, animeSlice } from './slices/animeSlice';
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// import UserReducer from "./slices/userSlice";
import { userSlice } from "./slices/userSlice";
import { animeApi } from './animeApi';

const rootReducer = combineReducers({
    user: userSlice.reducer,
    anime: animeSlice.reducer,
    [animeApi.reducerPath]: animeApi.reducer
})

export const setUpStore = () => {
    return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(animeApi.middleware)
})
}
 

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore['dispatch']; 