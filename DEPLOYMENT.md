# Study Companion - Deployment Guide

## Architecture

Frontend

* React (Create React App)
* Hosted on Vercel

Backend

* Node.js + Express
* Hosted on Vercel Serverless Functions

Database

* MongoDB Atlas

Authentication

* JWT stored in HTTP-only cookies

---

## Repository Structure

Frontend Repository

* studycompfor_gate

Backend Repository

* backend

---

## Frontend Deployment

### Required Environment Variables

REACT_APP_API_URL=https://sdfcbackend.vercel.app

### Build Command

npm run build

### Output Directory

build

### Deploy Platform

Vercel

---

## Backend Deployment

### Required Environment Variables

MONGO_URI=<MongoDB Atlas Connection String>

JWT_SECRET=<Your Secret>

FRONTEND_URL=https://sdfcfrontend.vercel.app

### Example MONGO_URI

mongodb+srv://username:password@cluster0.mongodb.net/studycompanion?retryWrites=true&w=majority

### Deploy Platform

Vercel

---

## MongoDB Atlas Setup

### Database User

Create a database user with:

* Read and Write access

### Network Access

For testing:

0.0.0.0/0

For production:

* Restrict access appropriately

---

## Backend Configuration

### vercel.json

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.js"
    }
  ]
}
```

### Production Cookies

```js
res.cookie("token", token, {
  httpOnly: true,
  sameSite: "none",
  secure: true,
  maxAge: 24 * 60 * 60 * 1000
});
```

---

## Deployment Checklist

Frontend

* REACT_APP_API_URL configured
* Build succeeds
* Latest deployment active

Backend

* MONGO_URI configured
* JWT_SECRET configured
* FRONTEND_URL configured
* MongoDB Atlas accessible

MongoDB

* User exists
* Password verified
* Network access configured

Authentication

* Login works
* Registration works
* Logout works
* Session persists after refresh

---

## Post Deployment Tests

1. Register User
2. Login
3. Refresh Dashboard
4. Logout
5. Login Again
6. Open in Incognito Mode
7. Mobile Browser Test

If all pass, deployment is considered healthy.
