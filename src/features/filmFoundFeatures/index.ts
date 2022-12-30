import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import filmFoundAsyncThunk from "./filmFoundAsyncThunk";
import ImageConstants from '../../utils/FilmImageConstants'

const initialState: any = {
    value: {},
    loading: false,
}

export const counterSlice = createSlice({
    name: 'film-founder',
    initialState,
    reducers: {
        updateState(state, action) {
            console.log(action)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(filmFoundAsyncThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(filmFoundAsyncThunk.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                const foundedFilmImage = ImageConstants[~~action.payload.eposide_id]
                const object = Object.assign({}, {image: foundedFilmImage}, action.payload);
                state.value = object;
                state.loading = false;
            })
            .addCase(filmFoundAsyncThunk.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
            });
    }
})

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions

export default counterSlice.reducer
