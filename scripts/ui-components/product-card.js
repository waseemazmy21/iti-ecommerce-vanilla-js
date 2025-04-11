import { createElement, createProductCard } from "./ui.js";
import { getProductById, getProducts } from "../api.js"

const products_container = document.getElementById("products-container");
products_container.setAttribute("class", "products-container");

// getProducts() => api to get products data from db
var productsData = getProducts().slice(0,6);


// building the productCards inside a fragment
const fragment = new DocumentFragment();

for (const product of productsData) {
    const productCard = createProductCard(product);
    fragment.appendChild(productCard);
}


products_container.appendChild(fragment)
