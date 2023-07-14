import { createSlice } from '@reduxjs/toolkit';

const bidsSlice = createSlice({
    name: "bids",
    initialState: { 
        currentList: null,
        isFetching: false,
        error: false,
        errorCode: '' 
    },
    reducers: {
        bidRequestStart: (state) => {
            state.isFetching = true;
        },
        bidRequestSuccess: (state, action) => {
            state.isFetching = false; 
            state.error = false;
            state.errorCode = '';
            state.currentList = action.payload;
            window.location.reload(false); 
        },
        bidRequestFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
            state.errorCode = action.payload
        },
    }
});


export const { bidRequestStart, bidRequestSuccess, bidRequestFailure } = bidsSlice.actions;
export default bidsSlice.reducer;