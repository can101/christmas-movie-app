import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import searchAsyncThunk from "./searchAsyncThunk";

const initialState: any = {
    value: [],
    loading: false,
    searchBy: '',
    isSearch: false,
    notFound: false,
}

export const counterSlice = createSlice({
    name: 'film-list',
    initialState,
    reducers: {
        resetSearch: (state) => {
            state.value = []
            state.loading = false
            state.searchBy = ''
            state.isSearch = false
            state.notFound = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchAsyncThunk.pending, (state) => {
                state.loading = true;
                state.notFound = false;
            })
            .addCase(searchAsyncThunk.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.value = action.payload.data.results;
                if (action.payload.data.results.length == 0) {
                    state.notFound = true;
                }
                if (!state.isSearch) {
                    state.isSearch = true;
                }
                state.searchBy = action.payload.tag.searchBy;
            })
            .addCase(searchAsyncThunk.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.notFound = false;
                state.value = [];
            });
    }
})

// Action creators are generated for each case reducer function
export const {resetSearch} = counterSlice.actions

export default counterSlice.reducer
