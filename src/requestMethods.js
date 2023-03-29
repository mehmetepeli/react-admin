import axios from "axios";

const BASE_URL = "http://localhost:8801/api/";
const TOKEN = (localStorage.getItem("persist:root")) ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser).isAdmin : null;

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer: ${TOKEN}` }
});
