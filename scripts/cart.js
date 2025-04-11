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
  updatePrice();
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

function clearCart() {
  cart = [];
  localStorage.removeItem("cart");
  renderCart();
}

function createCartItem(item) {
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("cart-item-info");
  const img = document.createElement("img");
  img.src = item.product.image || "default.jpg";
  img.alt = item.product.title ? item.product.title.slice(0, 20) : "Cart item";
  const textDiv = document.createElement("div");
  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = item.product.title.slice(0, 20) || "Unknown Item";
  const category = document.createElement("p");
  category.classList.add("category");
  category.textContent = item.product.category || "Uncategorized";
  textDiv.appendChild(name);
  textDiv.appendChild(category);
  infoDiv.appendChild(img);
  infoDiv.appendChild(textDiv);

  const priceDiv = document.createElement("div");
  priceDiv.classList.add("cart-item-price");
  priceDiv.textContent = `$${item.product.price.toFixed(2)}` || "$0.00";

  const quantityDiv = document.createElement("div");
  quantityDiv.classList.add("cart-item-quantity");
  quantityDiv.textContent = item.quantity || 0;

  const totalDiv = document.createElement("div");
  totalDiv.classList.add("cart-item-total");
  const total = (item.product.price || 0) * (item.quantity || 0);
  totalDiv.textContent = `$${total.toFixed(2)}`;

  cartItem.appendChild(infoDiv);
  cartItem.appendChild(priceDiv);
  cartItem.appendChild(quantityDiv);
  cartItem.appendChild(totalDiv);

  return cartItem;
}

function renderCart() {
  const cartContainer = document.getElementById("cart-items");
  if (!cartContainer) {
    console.error("Cart container not found!");
    return;
  }

  // Clear existing items but keep headers
  const existingItems = cartContainer.querySelectorAll(".cart-item");
  existingItems.forEach((item) => item.remove());

  cart.forEach((item) => {
    const cartItemElement = createCartItem(item);
    const divider = document.createElement("div");
    divider.classList.add("cart-item-divider");
    cartContainer.appendChild(cartItemElement);
    cartContainer.appendChild(divider);
  });

  if (cart.length === 0) {
    const emptyMessage = document.createElement("div");
    emptyMessage.style.gridColumn = "1 / -1"; // Span all columns
    emptyMessage.textContent = "Your cart is empty.";
    emptyMessage.style.padding = "1rem";
    emptyMessage.style.textAlign = "center";
    cartContainer.appendChild(emptyMessage);
  }
}

function calculatePrice() {
  const subtotal = cart.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  const shipping = 5;
  const total = subtotal + shipping;
  return [subtotal, shipping, total];
}

function updatePrice() {
  const [subtotal, shipping, total] = calculatePrice();
  const subtotalElement = document.getElementById("subtotal");
  const shippingElement = document.getElementById("shipping");
  const totalElement = document.getElementById("total");
  subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  shippingElement.textContent = `$${shipping.toFixed(2)}`;
  totalElement.textContent = `$${total.toFixed(2)}`;
}

function getAddress() {
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  if (!address || !city) {
    alert("Please fill in all address fields.");
    return null;
  }
  return { address, city };
}
function checkout() {
  const address = getAddress();
  if (!address) return;
  clearCart();
  alert(
    `Checkout successful! Address: ${address.address}, City: ${address.city}`
  );
}

const checkoutButton = document.getElementById("checkout");
checkoutButton.addEventListener("click", checkout);

// test
addToCart(product);
addToCart(product);
addToCart({ ...product, id: 2 });
