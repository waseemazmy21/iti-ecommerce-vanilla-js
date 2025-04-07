import { createElement, createProductCard } from "./ui.js";
import { getProductById, getProducts } from "./api.js"

const navbar = document.getElementById("navbar");
navbar.setAttribute("class", "navbar");

const left_section = createElement("div", {"class": "left-section"}, navbar)
const websiteName = createElement("h1", {}, left_section, "Hekto");
const navbar_items = createElement("ul", { "list-style-type": "none" }, left_section);
const home_item = createElement("li", {}, navbar_items);
const home_link = createElement("a", { "href": "link_to_homepage" }, home_item, "Home")
const pages_item = createElement("li", {}, navbar_items);
const pages_link = createElement("a", {"href":"link_to_pages"}, home_item, "Pages")
const products_item = createElement("li", {}, navbar_items);
const products_link = createElement("a", {"href":"link_to_products"}, products_item, "Products");
const blog_item = createElement("li", {}, navbar_items);
const blog_link = createElement("a", {"href":"link_to_blog"}, products_item, "Blog");
const shop_item = createElement("li", {}, navbar_items);
const shop_link = createElement("a", {"href":"link_to_shop"}, products_item, "Shop");
const contact_item = createElement("li", {}, navbar_items);
const contact_link = createElement("a", {"href":"link_to_contacts"}, contact_item, "Contact");
const search = createElement("input", { "type": "search", "id": "search", "name": "search" }, navbar);
const search_btn = createElement("button", {}, navbar, "search");