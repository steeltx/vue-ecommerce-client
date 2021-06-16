import { uniqBy, countBy } from "lodash";
import { API_URL, PRODUCTS } from "../utils/constans";

export function addProductCartApi(idProduct) {
    const products = getCartApi();
    products.push(idProduct);
    localStorage.setItem(PRODUCTS, JSON.stringify(products));
}

export function getCartApi() {
    const products = localStorage.getItem(PRODUCTS);
    if (!products) return [];
    return JSON.parse(products);
}

export async function getProductsCartApi() {
    // obtener todos los id del producto
    const idProducts = getCartApi();
    if (idProducts.lenght === 0) return null;
    try {
        const products = [];
        for await (const idProduct of idProducts) {
            const response = await fetch(`${API_URL}/producs/${idProduct}`);
            const result = await response.json();
            products.push(result);
        }

        // contar cuantos productos hay iguales
        const productsCount = countBy(products, (product) => {
            return product.name;
        });

        // obtener los productos unicos, y contar el total en el array
        const combined = uniqBy(products, (product) => {
            const productTemp = product;
            productTemp.quantity = productsCount[product.name];
            return productTemp.name;
        });
        return combined;
    } catch (error) {
        console.log(error);
        return null;
    }
}