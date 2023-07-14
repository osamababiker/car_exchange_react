import { createSlice } from '@reduxjs/toolkit';

const carsSlice = createSlice({
    name: "cars",
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
            document.getElementById("btn-close").click();
            window.location.replace('#/'); 
        },
        requestFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
            state.errorCode = action.payload
        },
    }
});


export const { requestStart, requestSuccess, requestFailure } = carsSlice.actions;
export default carsSlice.reducer;