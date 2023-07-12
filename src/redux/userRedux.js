import { createSlice } from '@reduxjs/toolkit';
import cookies from 'js-cookie';

const userSlice = createSlice({
    name: "user",
    initialState: { 
        currentUser: null,
        accessToken: null, 
        isFetching: false,
        error: false,
        errorCode: '' 
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false; 
            state.error = false;
            state.errorCode = '';
            state.currentUser = action.payload.user;
            state.accessToken = action.payload.token;
            cookies.set('token', state.accessToken);
            window.location.reload(false);
        },
        loginFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
            state.errorCode = action.payload
        },
        logoutSuccess: (state) => {
            state.isFetching = false;
            state.error = false;
            state.errorCode = '';
            state.currentUser = null;
            state.accessToken = null;
            cookies.set('token', null);
        }
    }
});


export const { loginStart, loginSuccess, loginFailure, logoutSuccess } = userSlice.actions;
export default userSlice.reducer;