import {configureStore} from '@reduxjs/toolkit'
import filmReducer from './filmFeature'
import filmFoundReducer from "./filmFoundFeatures";
import searchReducer from "./searchFeature";

export const store = configureStore({
    reducer: {
        films: filmReducer,
        found: filmFoundReducer,
        search: searchReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck: false,})
})
