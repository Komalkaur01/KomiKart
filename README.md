# 🛍️ KomiKart - Discover quality products curated with care — shop smart, live better.

KomiKart is a modern, playful, and responsive e-commerce platform built with React, focused on delivering a seamless shopping experience.

![KomiKart Screenshot](./public/banner1.jpg)

## 🚀 Features

- 🏠 Beautiful home page with banners, featured products, and category carousel
- 🛒 Product listing and detail pages
- 📂 Shop by category
- 🔐 Login / Signup authentication (dummy/local state)
- 🛍️ Cart functionality with quantity and price updates
- 💳 Checkout page

## 🧱 Tech Stack

- **Frontend:** React, React Router
- **Styling:** Tailwind CSS
- **Backend (Mock API):** [dummyjson.com](https://dummyjson.com)
- **State Management:** Context API (User & Cart)
- **Hosting:** GitHub Pages / Vercel (optional)

## 📦 Installation

```bash
git clone https://github.com/yourusername/KomiKart.git
cd KomiKart
npm install
npm run dev
```

Make sure you have **Node.js** and **npm** installed.

## 🖼️ Folder Structure

```
src/
├── assets/               # Images and icons
├── components/           # Reusable UI components
├── context/              # UserContext, CartContext
├── pages/                # All route pages (Home, Product, Category, Login, etc.)
├── App.jsx
└── main.jsx
```

## 📸 Screenshots

| Home Page | Product Details | Cart |
|----------|------------------|------|
| ![](./public/banner2.jpg) | ![](./public/product.jpg) | ![](./public/cart.jpg) |

## 💡 To-Do Features

- 🔐 Firebase/Backend authentication
- ✅ Order history and profile page
- 🔍 Search and filter improvements
- ✨ Animations and micro-interactions
