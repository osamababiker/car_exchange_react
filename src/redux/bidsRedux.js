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
        requestStart: (state) => {
            state.isFetching = true;
        },
        requestSuccess: (state, action) => {
            state.isFetching = false; 
            state.error = false;
            state.errorCode = '';
            state.currentList = action.payload;
            window.location.reload(false);
        },
        requestFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
            state.errorCode = action.payload
        },
    }
});


export const { requestStart, requestSuccess, requestFailure } = bidsSlice.actions;
export default bidsSlice.reducer;