# 🔐 Node.js Authentication & Authorization API

This project demonstrates how to implement **authentication and authorization** using **Node.js**, **Express.js**, and **JWT (Bearer Token)**. It includes user registration, login, protected routes, role-based access control, and token verification middleware.

---

## 🚀 Features

- ✅ User Registration with hashed passwords (bcrypt)
- ✅ User Login with JWT token generation
- ✅ Protected routes with JWT Bearer Token
- ✅ Role-based access control (e.g., admin/user)
- ✅ Secure password handling
- ✅ Middleware for token verification
- ✅ RESTful API structure with clear separation of concerns

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT (jsonwebtoken)**
- **bcryptjs**
- **dotenv**

---

## 📁 Project Structure

├── controllers/
│ └── authController.js
├── middlewares/
│ ├── authMiddleware.js
│ └── roleMiddleware.js
├── models/
│ └── User.js
├── routes/
│ └── authRoutes.js
├── .env
├── server.js
└── package.json

🔐 API Endpoints with Routers
🔸 router.post('/register',registeruser);
🔸 router.post('/login',loginUser);
🔸 router.get('/getuser',authMiddleware, getUser)


📌 Notes
=> Use HTTPS in production to protect token in transit.

=>Tokens should expire (e.g., 1h) and be refreshed appropriately.

=>Avoid storing sensitive data in JWT payload.

=>Consider using refresh tokens for better security.

👨‍💻 Author
Developed by Swaminathan VK
