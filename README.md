# 📚 Study Companion for Students

A full-stack web application designed to help students organize, track, and manage their studies efficiently. Built using React, Node.js, Express, MongoDB Atlas, and JWT Authentication.

## 🚀 Live Demo

### Frontend

https://sdfcfrontend.vercel.app

### Backend API

https://sdfcbackend.vercel.app

---

## ✨ Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Secure Cookie-Based Sessions

### Study Management

* Create and manage study subjects
* Track learning progress
* Organize study resources
* Update study status
* Delete completed or unwanted entries

### Dashboard

* Personalized student dashboard
* Progress overview
* Subject management
* Organized study workflow

### Backend Features

* RESTful API Architecture
* MongoDB Atlas Integration
* JWT Authorization
* Environment Variable Security
* CORS Configuration
* Error Handling Middleware

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JSON Web Tokens (JWT)
* Cookie Parser
* CORS

### Deployment

* Vercel (Frontend)
* Vercel (Backend)
* MongoDB Atlas (Database)

---

## 📂 Project Structure

### Frontend

```plaintext
frontend/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.js
│   └── index.js
│
├── package.json
└── vercel.json
```

### Backend

```plaintext
backend/
│
├── models/
├── routes/
├── middleware/
├── server.js
├── package.json
└── vercel.json
```

---

## 🔐 Environment Variables

### Backend (.env)

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=production
```

### Frontend (.env)

```env
REACT_APP_API_URL=https://sdfcbackend.vercel.app
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Runs on:

```text
http://localhost:3000
```

### Backend Setup

```bash
cd backend
npm install
node server.js
```

Runs on:

```text
http://localhost:5000
```

---

## 🔄 API Endpoints

### Authentication

#### Register

```http
POST /register
```

#### Login

```http
POST /login
```

#### Logout

```http
POST /logout
```

#### Current User

```http
GET /me
```

---

## 🌍 Deployment

### Frontend

https://sdfcfrontend.vercel.app

### Backend

https://sdfcbackend.vercel.app

### Database

MongoDB Atlas Cloud Database

---

## 🎯 Key Achievements

* Developed a full-stack MERN application with JWT authentication.
* Integrated MongoDB Atlas cloud database.
* Deployed frontend and backend separately on Vercel.
* Implemented protected routes and secure cookie-based authentication.
* Built REST APIs using Express.js and Mongoose.
* Configured CORS and environment variables for production deployment.

---

## 🔮 Future Enhancements

* Study streak tracking
* Daily study goals
* Notes management system
* Pomodoro timer
* Subject analytics
* GATE preparation modules
* Progress visualization charts
* Dark mode support

---

## 👨‍💻 Author

**Vedansh Sharma**

Aspiring Full-Stack Developer passionate about building practical web applications and strengthening MERN stack development skills.

---

## 📜 License

This project is licensed under the MIT License.
