import { createElement } from "./ui.js";


const header = document.getElementById("header");
header.setAttribute("class", "header")
const header_left = createElement("div", { "class": "header-section" }, header);
const mail = createElement("a", {"href": "mailto:emailaddress@whatever.com"}, header_left, "\u{2709} emailaddress@whatever.com")
const tel = createElement("a", {"href": "tel:+564534545"}, header_left, "\u{260E} (123)4567890")
const header_right = createElement("div", { "class": "header-section" }, header);
const login = createElement("a", { "href": "link_to_login_page" }, header_right, "\u{1F464} Login");
const wishlist = createElement("a", { "href": "link_to_wishlist_page" }, header_right, "\u{2661} Wishlist");
const cart = createElement("a", { "href": "link_to_cart_page" }, header_right, "\u{1F6D2}");

