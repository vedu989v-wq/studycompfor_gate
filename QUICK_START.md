# Quick Start Guide - Study Companion Auth System

## ✅ What Was Fixed & Connected

### 1. **Backend Files** (in `/backend` folder)
- ✅ `server.js` - Express server with MongoDB connection
  - Fixed import path: `./Users.js` 
  - Updated CORS for ports 3000, 3001, and network IP
  - Configured two auth endpoints: `/api/auth/register` & `/api/auth/login`
  
- ✅ `Users.js` - Mongoose schema with security
  - Password hashing with bcryptjs (10 salt rounds)
  - Email validation and uniqueness constraint
  - Pre-save hook for password encryption
  - `matchPassword()` method for login verification

- ✅ `package.json` - Backend dependencies installed
  - express, cors, mongoose, bcryptjs, jsonwebtoken

### 2. **Frontend** (in `/studycompfor_gate` folder)
- ✅ `AuthPage.jsx` - Already properly configured!
  - Sends registration data: `{ name, email, password }`
  - Sends login data: `{ email, password }`
  - API calls to `http://localhost:5000/api/auth/*`
  - Handles success/error messages and redirects

### 3. **Database**
- ✅ MongoDB local connection ready
  - Database: `linkedin_auth_db`
  - URI: `mongodb://127.0.0.1:27017/linkedin_auth_db`

---

## 🚀 How to Run (3 Easy Steps)

### Step 1: Start MongoDB
```bash
# Open a terminal and run:
mongod
# Keep this running in the background
```

### Step 2: Start Backend Server
```bash
# Open a NEW terminal
cd "e:\Project_Study Companion\backend"
npm start
# Should see: "🚀 Successfully connected to Local MongoDB!"
#            "Backend server running on port 5000"
```

### Step 3: Start Frontend
```bash
# Open another NEW terminal
cd "e:\Project_Study Companion\studycompfor_gate"
npm start
# Should open http://localhost:3000 automatically
```

---

## 📝 Flow Diagram

```
REGISTRATION:
┌──────────────────┐
│  React Frontend  │
│  (AuthPage.jsx)  │
└────────┬─────────┘
         │ POST { name, email, password }
         │ to http://localhost:5000/api/auth/register
         ▼
┌──────────────────────┐
│  Express Backend     │
│  (server.js)         │
│  - Check if email    │
│    already exists    │
└────────┬─────────────┘
         │ Create new User document
         ▼
┌──────────────────────┐
│  Mongoose & bcryptjs │
│  (Users.js)          │
│  - Hash password     │
│  - Validate email    │
└────────┬─────────────┘
         │ Save to DB
         ▼
┌──────────────────────┐
│  MongoDB             │
│  (linkedin_auth_db)  │
│  - User created ✅   │
└──────────────────────┘

LOGIN:
Same flow as above, but:
- Retrieves user by email
- Compares password with bcrypt
- Generates JWT token
- Sets secure cookie
- Redirects to /dashboard
```

---

## 🧪 Test It Out

### Register a New User:
1. Go to http://localhost:3000
2. Fill out the form with:
   - Name: `John Doe`
   - Email: `john@example.com`
   - Password: `password123`
3. Click "Join Now"
4. ✅ Should see success message

### Login with That User:
1. Switch to "Sign in" mode
2. Enter the same email & password
3. Click "Sign In"
4. ✅ Should redirect to dashboard

### Verify in MongoDB:
```bash
# Open MongoDB shell:
mongosh

# Run these commands:
use linkedin_auth_db
db.users.find()

# Should see your registered user(s) with:
# - hashed password (looks like: $2a$10$...)
# - email (lowercase)
# - name
# - timestamps
# - role: "user"
```

---

## 🔗 File Connections Summary

| Frontend | Backend Route | Database |
|----------|---|---|
| AuthPage.jsx (registration form) | `/api/auth/register` | Creates User doc |
| AuthPage.jsx (login form) | `/api/auth/login` | Finds User & validates |
| Tailwind CSS styling | N/A | N/A |
| React Router redirect | `/dashboard` | N/A |

---

## ⚠️ Important Notes

- **MongoDB must be running** before starting the backend
- **Backend must be running** before React frontend makes API calls
- Passwords are **never** stored in plain text (hashed with bcrypt)
- JWT tokens expire in **1 day** (24 hours)
- Tokens are stored as **HttpOnly cookies** (secure by default)

---

## 🎯 All Three Files Work Together Now!

✅ **AuthPage.jsx** → sends data to backend
✅ **server.js** → receives data, connects to MongoDB, runs business logic
✅ **Users.js** → defines user structure, validates, hashes password

**Everything is connected and ready to use!** 🚀
