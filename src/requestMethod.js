import axios from 'axios';
import cookies from 'js-cookie';

const BASE_URL = "http://127.0.0.1:8000/api";
const UPLOAD_URL = "http://127.0.0.1:8000/upload";
const TOKEN = cookies.get('token'); 

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {'Authorization': `Bearer ${TOKEN}`}
}); 

export const uploadUrl = UPLOAD_URL;