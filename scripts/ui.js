export function createElement(tag, attributes = {}, parent, textContent = "") {
    const elem = document.createElement(tag);

    // attributes = {"attribute name": "attribute value"}
    Object.keys(attributes).forEach(attr => elem.setAttribute(attr, attributes[attr]));

    if (textContent!= ""){
        elem.textContent = textContent;
    }

    !!parent?parent.appendChild(elem):{};
    return elem;
}

export function createProductCard(product) {
    const prodCard = createElement("div", { "class": "card" });
    const img = createElement("img", { "src": product["image"], "alt": product["title"] }, prodCard);
    const prod_title = createElement("h5", {}, prodCard, product["title"].split(' ').slice(0, 5).join(' '));
    const circles = createElement("div", { "class": "circle-container" }, prodCard);
    const butterup = createElement("div", { "class": "circle buttercup" }, circles);
    const purple = createElement("div", { "class": "circle purple" }, circles);
    const violet = createElement("div", { "class": "circle violet" }, circles);
    const prices = createElement("div", { "class": "prices" }, prodCard);
    const price = createElement("p", {"class":"price"}, prices, "$" + (product["price"] * .75).toFixed(2));
    const original_price = createElement("p", {"class":"price original-price"}, prices,"$" + product["price"]);

    return prodCard;
}