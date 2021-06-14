import { API_URL } from "../utils/constans";

export async function getCategoriesApi() {
    try {
        const response = await fetch(`${API_URL}/categories`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}