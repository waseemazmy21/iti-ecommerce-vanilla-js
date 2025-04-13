import { createElement } from "./ui.js";

const hero = document.getElementById("hero");
hero.setAttribute("class", "hero");

const left_img = createElement("img", { "class": "left-img", "src": "../../assets/images/image1-hero-section.PNG" }, hero);
const middle_section = createElement("div", { "class": "middle-section" }, hero);
const small_text = createElement("h5", {}, middle_section, "Best Furniture For Your Castle...");
const large_text = createElement("h1", {}, middle_section, "New Furniture Collection Trends in 2025")
const description = createElement("p", {}, middle_section, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
const shop_link = createElement("a", { "href": "../../pages/products.html" }, middle_section);
const button = createElement("button", {}, shop_link, "Shop Now")
const right_img = createElement("img", {"class":"right-img", "src":"../../assets/images/image2-hero-section.PNG" }, hero);