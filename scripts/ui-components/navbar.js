import { createElement, createProductCard } from "./ui.js";
import { getProductById, getProducts } from "../api.js"

const navbar = document.getElementById("navbar");
navbar.setAttribute("class", "navbar");

const left_section = createElement("div", {"class": "left-section"}, navbar)
const websiteName = createElement("h1", {}, left_section, "Hekto");
const navbar_items = createElement("ul", { "list-style-type": "none" }, left_section);
const home_item = createElement("li", {}, navbar_items);
const home_link = createElement("a", { "href": "../../index.html" }, home_item, "Home")
const products_item = createElement("li", {}, navbar_items);
const products_link = createElement("a", {"href":"../../pages/products.html"}, products_item, "Products");
const search = createElement("input", { "type": "search", "id": "search", "name": "search" }, navbar);
const search_btn = createElement("button", {"id": "search-button"}, navbar, "search");