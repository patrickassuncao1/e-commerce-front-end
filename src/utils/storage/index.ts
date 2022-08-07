import { TokenUserType } from "../../@types";


export const setUserTokenLocalStorage = (token: TokenUserType | null) => {
    localStorage.setItem('t', JSON.stringify(token));
}

export const getUserTokenLocalStorage = () => {
    const json = localStorage.getItem('t');
    
    if (!json) {
        return null;
    }

    const user = JSON.parse(json);

    return user ?? null;
}
