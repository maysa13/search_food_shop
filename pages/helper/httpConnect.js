import axios from "axios";

let instance = axios.create();

instance.interceptors.request.use( (config) => {
    document.body.classList.add('loading-indicator');
    config.headers = {
    };
    return config;
});

instance.interceptors.response.use( (response) => {
    document.body.classList.remove('loading-indicator');
    return response;
}, function (error) {
        try {
            console.log("error.response : ", error.response);
            document.body.classList.remove('loading-indicator');
        }
        catch (error) {
            return Promise.reject(error);
        }
});

export const httpConnect = instance;