# Study Companion - MERN Setup Guide

## Project Structure

```
Project_Study Companion/
├── backend/                  # Express + MongoDB backend
│   ├── server.js            # Main backend server
│   ├── Users.js             # MongoDB User schema with bcrypt
│   ├── package.json         # Backend dependencies
│   └── node_modules/
├── studycompfor_gate/       # React frontend (Create React App)
│   ├── src/
│   │   ├── AuthPage.jsx     # Login/Register UI
│   │   ├── index.js         # React entry point
│   │   ├── index.css        # Global styles (with Tailwind)
│   │   └── ...
│   ├── package.json         # Frontend dependencies
│   └── node_modules/
└── [config files]
```

## Prerequisites

- **Node.js** (v14+) - [Download](https://nodejs.org/)
- **MongoDB** running locally on `mongodb://127.0.0.1:27017`
  - To start MongoDB on Windows: Run `mongod` in terminal/cmd
  - Or use MongoDB Atlas cloud database (update MONGO_URI in backend/server.js)

## ⚙️ Setup Instructions

### 1. Backend Setup

```bash
cd backend
npm install
npm start
```

The backend will:
- Start on port **5000**
- Connect to MongoDB at `mongodb://127.0.0.1:27017/linkedin_auth_db`
- Provide two authentication endpoints:
  - `POST /api/auth/register` - Create new user account
  - `POST /api/auth/login` - User login with JWT token

**Expected output:**
```
🚀 Successfully connected to Local MongoDB!
Backend server running on port 5000
```

### 2. Frontend Setup (In a NEW terminal)

```bash
cd studycompfor_gate
npm start
```

The React app will:
- Start on port **3000** (or **3001** if 3000 is busy)
- Automatically open in your browser
- Display the Auth page with Login/Register forms

## 🔄 How It Works

1. **User Registration Flow:**
   ```
   User fills form → AuthPage.jsx → axios POST to /api/auth/register 
   → server.js validates & creates User → bcryptjs hashes password 
   → Stored in MongoDB → Success message shown
   ```

2. **User Login Flow:**
   ```
   User fills form → AuthPage.jsx → axios POST to /api/auth/login 
   → server.js finds user & compares password → JWT token generated 
   → Token stored in cookie → Redirect to /dashboard
   ```

## 📊 Database Structure

User document in MongoDB:
```json
{
  "_id": "ObjectId",
  "name": "John Doe",
  "email": "john@example.com",
  "password": "$2a$10$[hashed_password]",
  "role": "user",
  "isVerified": false,
  "createdAt": "2026-06-12T...",
  "updatedAt": "2026-06-12T..."
}
```

## 🔐 Key Features

- ✅ **Password Hashing**: Uses bcryptjs (10 salt rounds)
- ✅ **Email Validation**: Regex pattern checks email format
- ✅ **Unique Email**: Database prevents duplicate accounts
- ✅ **JWT Authentication**: Token-based session management
- ✅ **CORS Enabled**: Frontend can communicate with backend
- ✅ **Error Handling**: Meaningful error messages from backend

## 🧪 Testing the Setup

### Test Registration:
1. Open http://localhost:3000 (or 3001)
2. Click "Join Now"
3. Fill in: Name, Email, Password (min 6 chars)
4. Click "Join Now" button
5. Should see ✅ "Registration Successful! Please Login."

### Test Login:
1. Enter the email & password you just registered
2. Click "Sign In"
3. Should redirect to /dashboard after 1.5 seconds
4. Success! 🎉

## ⚠️ Troubleshooting

### "Cannot find module 'mongoose'"
```bash
# Run in backend folder
npm install mongoose bcryptjs jsonwebtoken express cors
```

### "MongoDB connection error"
- Make sure MongoDB is running: `mongod`
- Or update MONGO_URI to use MongoDB Atlas cloud

### "CORS error" 
- Backend is already configured to accept requests from ports 3000 & 3001
- If using different port, update `cors` configuration in backend/server.js

### "Port already in use"
- React: Will prompt to use 3001 if 3000 is busy ✅
- Backend: Kill the process on port 5000 or change PORT in server.js

## 🚀 Production Deployment

Before deploying:
1. Update MONGO_URI to production database
2. Update JWT secret key (currently hardcoded as 'YOUR_SUPER_SECRET_KEY')
3. Set CORS origins to your production domain
4. Use environment variables (.env file)

## 📝 Next Steps

- Add password reset functionality
- Implement email verification
- Add user profile management
- Build dashboard page
- Add refresh token logic
- Deploy to cloud (Vercel for frontend, Heroku/Railway for backend)

---

For issues or questions, check the code comments in:
- `backend/server.js` - API routes and MongoDB connection
- `backend/Users.js` - Schema and validation logic
- `studycompfor_gate/src/AuthPage.jsx` - Frontend form and API calls
