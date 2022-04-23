import { customMiddleWare } from './middleware/customMiddleWare';
import { animeSlice } from './slices/animeSlice';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";
import { animeApi } from './api/animeApi';

const rootReducer = combineReducers({
    user: userSlice.reducer,
    anime: animeSlice.reducer,
    [animeApi.reducerPath]: animeApi.reducer
})

export const setUpStore = () => {
    return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(animeApi.middleware, customMiddleWare)
})
}
 

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore['dispatch']; 