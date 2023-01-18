import {configureStore} from '@reduxjs/toolkit'
import filmReducer from './filmFeature'
import filmFoundReducer from "./filmFoundFeatures";
import searchReducer from "./searchFeature";

console.log(import.meta.env.VITE_NODE_ENV)

export const store = configureStore({
    reducer: {
        films: filmReducer,
        found: filmFoundReducer,
        search: searchReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,}),
    devTools: import.meta.env.VITE_NODE_ENV === 'development',
})
