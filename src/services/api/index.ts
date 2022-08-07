import { comment, createCommentType, createUserType, products, productType, user } from "../../@types";
import { api } from "../../conf/api"

export const getPopularProducts = async () => {
    const response = await api.get('/api/products/popular');
    const data = response.data;

    return data as productType[];
}

export const getAllProducts = async () => {
    const response = await api.get('/api/products/all');
    const data = response.data;

    return data as productType[];
}

export const firstProduct = async (id: string) => {
    const response = await api.get('/api/products/first/' + id);
    const data = response.data;

    return data as products;
}

export const createUser = async (user: createUserType) => {
    const response = await api.post('/api/user/create', user);
    const data = response.data;

    return data;
}

export const firstUser = async (id: string) => {
    const response = await api.get('/api/user/first/' + id);
    const data = response.data;

    return data as user;
}


export const LoginRequest = async (email: string, password: string) => {
    const response = await api.post("/api/user/login", { email: email, password: password });
    const data = response.data;
    return data;
}

export const refreshToken = async (refreshToken?: string) => {
    const response = await api.post('/api/user/refresh-token', { refresh_token: refreshToken });
    const data = response.data;
    return data;
}

export const createComment = async (comment: createCommentType) => {
    console.log(comment);
    const response = await api.post('/api/comment/create', comment);
    const data = response.data;
    return data as comment;
}