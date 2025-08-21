const API_URL = "http://localhost:5000/api";
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Fetch all products
async function fetchProducts() {
  const res = await fetch(`${API_URL}/products`);
  const products = await res.json();
  const list = document.getElementById("product-list");
  list.innerHTML = products.map(p => `
    <div class="product">
      <img src="${p.image || 'https://via.placeholder.com/150'}" width="100">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart('${p._id}', '${p.name}', ${p.price})">Add to Cart</button>
      <br><a href="product.html?id=${p._id}">View Details</a>
    </div>
  `).join("");
}

// Fetch single product
async function fetchProductDetails(id) {
  const res = await fetch(`${API_URL}/products/${id}`);
  const p = await res.json();
  document.getElementById("product-details").innerHTML = `
    <h2>${p.name}</h2>
    <img src="${p.image || 'https://via.placeholder.com/200'}" width="200">
    <p>${p.description}</p>
    <p><b>Price:</b> $${p.price}</p>
    <button onclick="addToCart('${p._id}', '${p.name}', ${p.price})">Add to Cart</button>
  `;
}

// Add to cart
function addToCart(id, name, price) {
  cart.push({ id, name, price, qty: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

// Display cart
function displayCart() {
  const cartItems = document.getElementById("cart-items");
  let total = 0;
  cartItems.innerHTML = cart.map(item => {
    total += item.price * item.qty;
    return `<p>${item.name} - $${item.price} x ${item.qty}</p>`;
  }).join("");
  document.getElementById("total").innerText = "Total: $" + total;
}

// Checkout
async function checkout() {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Please login first!");
    return;
  }
  const user = parseJwt(token);

  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: user.id, products: cart, total: getCartTotal() })
  });

  const data = await res.json();
  alert(data.message);
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

// Register
async function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${API_URL}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password })
  });
  const data = await res.json();
  alert(data.message);
  window.location.href = "login.html";
}

// Login
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  if (data.token) {
    localStorage.setItem("token", data.token);
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert(data.message);
  }
}

// Decode JWT
function parseJwt(token) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
}
