import { createElement, createProductCard } from "./ui.js";
import { getProductById, getProducts } from "./api.js"

const app = document.getElementById("app");

const page = createElement("div", { "class": "page" }, app);
const header = createElement("div", { "class": "header" }, page);
const header_left_section = createElement("div", { "class": "header-section" }, header);
const mail = createElement("a", {"href": "mailto:emailaddress@whatever.com"}, header_left_section, "\u{2709} emailaddress@whatever.com")
const tel = createElement("a", {"href": "tel:+564534545"}, header_left_section, "\u{260E} (123)4567890")
const header_right_section = createElement("div", { "class": "header-section" }, header);
const login = createElement("a", { "href": "link_to_login_page" }, header_right_section, "\u{1F464} Login");
const cart = createElement("a", { "href": "link_to_cart_page" }, header_right_section, "\u{1F6D2}");
const navbar = createElement("div", { "class": "navbar" }, page);
const websiteName = createElement("h1", {}, navbar, "EShop!");
const top_section = createElement("div", { "class": "top-section" }, page);


// getProducts() => api to get products data from db
var productsData = getProducts();


// building the productCards inside a fragment
const fragment = new DocumentFragment();

for (const product of productsData) {
    const productCard = createProductCard(product);
    fragment.appendChild(productCard);
}



page.appendChild(fragment)
