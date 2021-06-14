import { API_URL } from "../utils/constans";

export async function getProducts(limit = 1000) {
    try {
        const response = await fetch(
            `${API_URL}/producs?_sort=created_at:desc&_limit=${limit}`
        );
        const result = await response.json();
        return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getProductsCategory(category) {

    try {
        const response = await fetch(`${API_URL}/producs?_where[category.slug]=${category}&_sort=created_at:desc`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }

}