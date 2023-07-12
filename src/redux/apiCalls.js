import { loginFailure, loginStart, loginSuccess, logoutSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethod";

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
        dispatch(loginFailure(err.response.status));
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