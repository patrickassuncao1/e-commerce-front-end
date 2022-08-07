import axios from "axios";
import { refreshToken } from "../../services/api";
import { getUserTokenLocalStorage, setUserTokenLocalStorage } from "../../utils/storage";

export const api = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        'Content-Type': 'application/json'
    },
})


api.interceptors.request.use(
    (config) => {
        const user = getUserTokenLocalStorage();
        config.headers = {
            Authorization: "Bearer " + user?.token,
            'Content-Type': 'application/json'
        };

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalReq = error?.config;
        if (error.response.status === 401 && error.config && !error.config._retry) {
            originalReq._retry = true;
            try {
                const token = getUserTokenLocalStorage();

                const newResponse = await refreshToken(token?.refreshToken?.id);

                // console.log("refresh_token: ", newResponse?.refreshToken, "token: ", newResponse?.token);
                console.log(originalReq);
                originalReq.headers = {
                    Authorization: "Bearer " + newResponse?.token,
                }

                const values = newResponse?.refreshToken ? { token: newResponse?.token, refreshToken: newResponse?.refreshToken }
                    : { token: newResponse?.token, refreshToken: token?.refreshToken };

                setUserTokenLocalStorage(values);
                // if(originalReq.method)
                return api.request(originalReq);

            } catch (err: any) {
                // console.log(err);
                return Promise.reject(err);
            }
        }

        // console.log(error.response.data);
        return Promise.reject(error);
    }


)
