import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { 
    persistStore, 
    persistReducer,  
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userSlice } from "./slices/userSlice";
import { customMiddleWare } from './middleware/customMiddleWare';
import { animeSlice } from './slices/animeSlice';
import { animeApi } from './api/animeApi';

const rootReducer = combineReducers({
    user: userSlice.reducer,
    anime: animeSlice.reducer,
    [animeApi.reducerPath]: animeApi.reducer
})

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [animeApi.reducerPath]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(animeApi.middleware, customMiddleWare) 
})
 
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;