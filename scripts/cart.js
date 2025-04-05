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
