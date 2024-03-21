import axios from "axios";

const instance = axios.create({
    // baseURL: import.meta.env.API_BACKEND_URL,
    baseURL: "http://localhost:8000",
    headers: {
        'Content-Type': 'application/json',
    }
});
instance.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
instance.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        const responseError = {
            code: error.response.status,
            message: error.response.data == "" ? { message: "Lỗi hệ thống Server" } : error.response.data
        }
        return Promise.reject(responseError);
    }
);


export default instance;