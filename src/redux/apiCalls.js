import { loginFailure, loginStart, loginSuccess, logoutSuccess } from "./userRedux";
import { requestStart, requestSuccess, requestFailure } from "./carsRedux";
import { bidRequestStart, bidRequestSuccess, bidRequestFailure } from "./bidsRedux";
import { publicRequest, userRequest } from "../requestMethod";


/** auth api calls  */
export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure(err.response.status));
    }
}

export const register = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/register", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure(err)); 
    } 
} 

export const updateUser = async (dispatch, user) => {
    dispatch(loginStart);
    try {
        const res = await userRequest.post("/auth/user/update", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure(err.response.status));
    }
}

export const logout = async (dispatch) => {
    try {
        const res = await userRequest.get("/auth/logout");
        dispatch(logoutSuccess(res.data));
    } catch (err) { 
        console.log(err);
    }
}

/** ============================================== */
/** cars api calls  */

export const cars = async (dispatch) => {
    dispatch(requestStart()); 
    try {
        const res = await publicRequest.get("/cars");
        dispatch(requestSuccess(res.data));
    } catch (err) {
        dispatch(requestFailure(err.response.status));
    }
}  

export const addCar = async (dispatch, car) => {
    dispatch(requestStart()); 
    try {
        const res = await userRequest.post("/cars/store", car);
        dispatch(requestSuccess(res.data));
    } catch (err) {
        dispatch(requestFailure(err.response.status));
    }
}  


/** ============================================== */
/** bids api calls  */

export const bids = async (dispatch) => {
    dispatch(requestStart()); 
    try {
        const res = await publicRequest.get("/bids");
        dispatch(requestSuccess(res.data));
    } catch (err) {
        dispatch(requestFailure(err.response.status));
    }
}  

export const addBids = async (dispatch, bid) => { 
    dispatch(bidRequestStart()); 
    try {
        const res = await userRequest.post("/bids/store", bid);
        dispatch(bidRequestSuccess(res.data));
    } catch (err) {
        dispatch(bidRequestFailure(err.response.status));
    }
} 