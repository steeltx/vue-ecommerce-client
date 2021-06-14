import { API_URL, PRODUCTS } from "../utils/constans";

export function addProductCartApi(idProduct) {
    const products = [];
    products.push(idProduct);
    localStorage.setItem(PRODUCTS, JSON.stringify(products));
}