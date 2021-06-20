import { API_URL } from "../utils/constans";

export async function createOrderApi(data) {
    try {
        const url = `${API_URL}/orders`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
        const response = await fetch(url, params);
        const result = response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getOrder(id) {
    try {
        const response = await fetch(
            `${API_URL}/orders?_where[users]=${id}&_sort=created_at:desc`
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}