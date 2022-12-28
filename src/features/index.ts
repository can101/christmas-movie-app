import {configureStore} from '@reduxjs/toolkit'
import filmReducer from './filmFeature'


export const store = configureStore({
    reducer: {
        films: filmReducer
    },
})
