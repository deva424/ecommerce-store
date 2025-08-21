---

# 🛒 Simple E-commerce Store

A basic **E-commerce Web App** built with **Express.js + MongoDB** (backend) and **HTML, CSS, JavaScript** (frontend).
Features include:

* Product Listings
* Product Details Page
* Shopping Cart
* User Registration & Login (JWT Authentication)
* Order Processing

---

## 📂 Project Structure

```
ecommerce-store/
│
├── backend/                         
│   ├── models/                      
│   │   ├── User.js                  
│   │   ├── Product.js               
│   │   └── Order.js                 
│   │
│   ├── routes/                      
│   │   ├── userRoutes.js            
│   │   ├── productRoutes.js         
│   │   └── orderRoutes.js           
│   │
│   ├── server.js                    
│   └── package.json                 
│
├── frontend/                        
│   ├── index.html                   
│   ├── product.html                 
│   ├── cart.html                    
│   ├── login.html                   
│   ├── register.html                
│   ├── style.css                    
│   └── script.js                    
│
└── README.md                        
```

---

## 🚀 Getting Started

### 1️⃣ Prerequisites

* [Node.js](https://nodejs.org/) (v14+)
* [MongoDB](https://www.mongodb.com/try/download/community) (running locally or MongoDB Atlas)

---

### 2️⃣ Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Start server
npm start
```

Server will run on: **[http://localhost:5000](http://localhost:5000)**

---

### 3️⃣ Database Setup

* Ensure MongoDB is running locally (`mongod`).
* Default connection is:

  ```
  mongodb://127.0.0.1:27017/ecommerce
  ```
* You can change it in `backend/server.js`.

---

### 4️⃣ Frontend Setup

No build tools required. Just open files in a browser.

Steps:

1. Go to `frontend/` folder.
2. Open **index.html** in your browser.

---

## 🔑 API Endpoints

### 👤 User

* `POST /api/users/register` → Register new user
* `POST /api/users/login` → Login and get JWT

### 📦 Products

* `GET /api/products` → Fetch all products
* `GET /api/products/:id` → Fetch single product
* `POST /api/products` → Add product (Admin use)

### 🛒 Orders

* `POST /api/orders` → Place new order
* `GET /api/orders/:id` → Get order details

---

## 📸 Screenshots (Optional)

👉 You can add images here later once you run the project.

---

## 🌍 Deployment (Optional)

* **Backend** → Deploy on [Render](https://render.com) / [Heroku](https://www.heroku.com).
* **Frontend** → Deploy on [Netlify](https://www.netlify.com) / [Vercel](https://vercel.com).
* **Database** → Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

---

## 👨‍💻 Author

Built by **Deva Mani** ✨ (Student, IT @ UCEV).
Focused on **career growth, learning, and building real projects** 🚀.

---

