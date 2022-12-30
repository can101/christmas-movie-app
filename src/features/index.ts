import {configureStore} from '@reduxjs/toolkit'
import filmReducer from './filmFeature'
import filmFoundReducer from "./filmFoundFeatures";


export const store = configureStore({
    reducer: {
        films: filmReducer,
        found: filmFoundReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck: false,})
})
