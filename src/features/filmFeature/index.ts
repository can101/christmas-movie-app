import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import filmAsyncThunk from "./filmAsyncThunk";

const initialState: any = {
    value: [],
    loading: false,
}

export const counterSlice = createSlice({
    name: 'film-list',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(filmAsyncThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(filmAsyncThunk.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.value = action.payload.results;
            })
            .addCase(filmAsyncThunk.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
            });
    }
})

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions

export default counterSlice.reducer
