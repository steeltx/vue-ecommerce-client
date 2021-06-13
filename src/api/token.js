import { TOKEN } from "../utils/constans";

export function setTokenApi(token) {
    localStorage.setItem(TOKEN, token);
}

export function getTokenApi(){
    return localStorage.getItem(TOKEN);
}
