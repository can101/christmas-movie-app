import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import filmAsyncThunk from "./filmAsyncThunk";

const initialState: any = {
    value: [],
    loading: false,
    details: {}
}

export const counterSlice = createSlice({
    name: 'film-list',
    initialState,
    reducers: {
        async foundFilmDetails(state,action:PayloadAction<string>) {
            console.log(action.payload)
            // const current =await state.value.filter((item: { episode_id: number; }) => item.episode_id == action.payload);
            // console.log(current)
        },
        resetDetailsState(state) {
            state.details = {}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(filmAsyncThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(filmAsyncThunk.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.value = action.payload.results;
            });
    }
})

// Action creators are generated for each case reducer function
export const {foundFilmDetails, resetDetailsState} = counterSlice.actions

export default counterSlice.reducer
