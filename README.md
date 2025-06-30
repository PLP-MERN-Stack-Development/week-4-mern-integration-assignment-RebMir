# 📝 MERN Blog Application

A full-stack blog platform built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). This project allows users to register, log in, create/edit/delete blog posts, and browse posts using pagination and search.

---

## 📚 Project Overview

This MERN Blog app is part of the **Week 4 Integration Assignment**. It demonstrates the integration of all core technologies in the MERN stack with proper user authentication, protected routes, and dynamic post management.

---

## 🚀 Features Implemented

- ✅ **User Authentication** (Register, Login with JWT)
- ✅ **Protected Routes** using a custom `ProtectedRoute` component
- ✅ **Create, Edit, View & Delete Posts**
- ✅ **Pagination** to load posts page-by-page
- ✅ **Search functionality** to filter posts
- ✅ **Responsive UI** using Tailwind CSS
- ✅ **Error handling** and user feedback

---

## 🛠️ Technologies Used

| Layer       | Tech Stack                        |
|-------------|-----------------------------------|
| Frontend    | React, Vite, Axios, Tailwind CSS  |
| Backend     | Node.js, Express.js, MongoDB, Mongoose |
| Auth        | JSON Web Tokens (JWT)             |
| Tools       | pnpm or npm, dotenv, React Router |

---

## 🧑‍💻 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/week-4-mern-integration-assignment-RebMir.git
cd mern-blog

2. Backend Setup (server/)
cd server
pnpm install  # or npm install

Create a .env file by copying .env.example:

cp .env.example .env

Edit .env with your MongoDB connection string and JWT secret:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Then run the backend server:

pnpm run dev  # or npm run dev

3. Frontend Setup (client/)
In a new terminal:

cd client
pnpm install  # or npm install
pnpm run dev  # or npm run dev

Frontend will be available at http://localhost:5173

📡 API Documentation
🔐 Auth Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login & receive JWT

📝 Post Endpoints
Method	Endpoint	Description
GET	/api/posts	Get all posts (with pagination & search)
GET	/api/posts/:id	Get a single post
POST	/api/posts	Create post (auth)
PUT	/api/posts/:id	Update post (auth)
DELETE	/api/posts/:id	Delete post (auth)

📂 Example .env File
Here's the .env.example file included in the repo:

PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mern-blog
JWT_SECRET=your_jwt_secret

🖼️ Screenshots
🏠 Home Page

🔐 Register Page

📝 Create/Edit Post

🔍 Search and Pagination


📌 Future Enhancements
🧵 Add Comments to Posts

❤️ Like/Reaction system

👤 User profile pages

🔄 Update profile & password

📱 Mobile UI enhancements

👤 Author
Rebeccah Miruka
Week 4 MERN Stack Assignment