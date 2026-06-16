📚 Study Companion for Students

A full-stack web application designed to help students organize, track, and manage their studies efficiently. Built with React, Node.js, Express, MongoDB Atlas, and JWT Authentication.

🚀 Live Demo
Frontend

🌐 https://sdfcfrontend.vercel.app

Backend API

⚙️ https://sdfcbackend.vercel.app

✨ Features
Authentication
User Registration
User Login
JWT Authentication
Protected Routes
Secure Cookie Handling
Study Management
Create study subjects
Track learning progress
Organize study material
Update study status
Delete completed or unwanted entries
Dashboard
Personalized student dashboard
Quick overview of subjects
Progress tracking
Study organization system
Backend Features
RESTful API Architecture
MongoDB Atlas Integration
JWT-based Authorization
Secure Environment Variables
CORS Configuration
Error Handling Middleware
🛠️ Tech Stack
Frontend
React.js
React Router
Axios
CSS
Backend
Node.js
Express.js
MongoDB Atlas
Mongoose
JWT
Cookie Parser
CORS
Deployment
Frontend: Vercel
Backend: Vercel
Database: MongoDB Atlas
📂 Project Structure
Frontend
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
Backend
backend/
│
├── models/
├── routes/
├── middleware/
├── server.js
├── package.json
└── vercel.json
🔐 Environment Variables
Backend (.env)
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=production
Frontend (.env)
REACT_APP_API_URL=https://sdfcbackend.vercel.app
⚙️ Installation
Clone Repository
git clone <repository-url>
Frontend Setup
cd frontend

npm install

npm start

Runs on:

http://localhost:3000
Backend Setup
cd backend

npm install

node server.js

Runs on:

http://localhost:5000
🔄 API Endpoints
Authentication
Register
POST /register
Login
POST /login
Logout
POST /logout
Current User
GET /me
🌍 Deployment
Frontend Deployment

Hosted on Vercel:

https://sdfcfrontend.vercel.app
Backend Deployment

Hosted on Vercel:

https://sdfcbackend.vercel.app
Database

MongoDB Atlas Cloud Database

📈 Future Improvements
Study streak tracking
Daily goals
Notes management
Pomodoro timer
Subject analytics
GATE preparation modules
Progress charts
Dark mode
👨‍💻 Author

Vedansh Sharma

Aspiring Full Stack Developer focused on building practical web applications and strengthening MERN stack development skills.

📜 License

This project is open-source and available under the MIT License
