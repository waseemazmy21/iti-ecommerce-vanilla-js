const product = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 },
};

// cart = {
//   product: product,
//   quantity: 1,
// };

let cart = [];

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("cart") !== null) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
  renderCart();
});

const addToCart = (product) => {
  const existingProduct = cart.find((item) => item.product.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ product, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

const removeFromCart = (product) => {
  const existingProduct = cart.find((item) => item.product.id === product.id);
  if (existingProduct) {
    existingProduct.quantity -= 1;
    if (existingProduct.quantity === 0) {
      cart = cart.filter((item) => item.product.id !== product.id);
    }
  } else {
    alert("Product not in cart");
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

const ClearCart = () => {
  cart = [];
  localStorage.removeItem("cart");
};

addToCart(product);
addToCart(product);
addToCart({ ...product, id: 2 });

function createCartItem(item) {
  // Create the main cart-item row
  const cartItem = document.createElement("tr");
  cartItem.classList.add("cart-item");

  // Product info (image + name/category)
  const infoTd = document.createElement("td");
  infoTd.classList.add("cart-item-info");

  const img = document.createElement("img");
  img.src = item.product.image || "default.jpg"; // Use imgSrc, adjust if it's image
  img.alt = item.product.title.slice(0, 20);

  const textDiv = document.createElement("div");
  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = item.product.name || "Unknown Item";

  const category = document.createElement("p"); // Changed from <td> to <p>
  category.classList.add("category");
  category.textContent = item.product.category || "Uncategorized";

  textDiv.appendChild(name);
  textDiv.appendChild(category);
  infoTd.appendChild(img);
  infoTd.appendChild(textDiv);

  // Price
  const priceTd = document.createElement("td");
  priceTd.classList.add("cart-item-price");
  priceTd.textContent = `$${item.product.price.toFixed(2)}` || "$0.00";

  // Quantity
  const quantityTd = document.createElement("td"); // Changed from <div> to <td>
  quantityTd.classList.add("cart-item-quantity");
  quantityTd.textContent = item.quantity || 0;

  // Total (price * quantity)
  const totalTd = document.createElement("td"); // Changed from <div> to <td>
  totalTd.classList.add("cart-item-total");
  const total = (item.product.price || 0) * (item.quantity || 0);
  totalTd.textContent = `$${total.toFixed(2)}`;

  // Assemble the cart item row
  cartItem.appendChild(infoTd);
  cartItem.appendChild(priceTd);
  cartItem.appendChild(quantityTd);
  cartItem.appendChild(totalTd);

  return cartItem;
}

function renderCart() {
  const cartContainer = document.getElementById("table-body"); // Target <tbody>
  if (!cartContainer) {
    console.error("table body not found!");
    return;
  }

  // Clear existing rows
  cartContainer.innerHTML = "";

  // Get cart from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Render each cart item
  cart.forEach((item) => {
    const cartItemElement = createCartItem(item);
    cartContainer.appendChild(cartItemElement);
  });

  // Show empty message if no items
  if (cart.length === 0) {
    cartContainer.innerHTML =
      "<tr><td colspan='4'>Your cart is empty.</td></tr>";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderCart();
});
