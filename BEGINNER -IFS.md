# Beginner Infrastructure Guide

### A Junior Developer's Explanation of Everything I Encountered While Deploying My First Full-Stack App

---

# Why This Document Exists

During deployment, I encountered many terms:

* Deployment
* Build
* Runtime
* Environment Variables
* CORS
* Cookies
* JWT
* MongoDB Atlas
* Serverless Functions
* API
* Request
* Response
* Status Codes

I fixed issues involving these concepts without fully understanding them.

This document explains them in simple language.

---

# 1. What is Deployment?

Before deployment:

```text
My Laptop
 ├── React Frontend
 ├── Node Backend
 └── MongoDB
```

Only I can access the project.

After deployment:

```text
Internet
 ├── Frontend on Vercel
 ├── Backend on Vercel
 └── MongoDB Atlas
```

Anyone with the URL can access it.

Deployment simply means:

> Putting your application on servers so other people can use it.

---

# 2. What is a Build?

React source code:

```jsx
<App />
```

cannot be directly served efficiently to users.

A build converts:

```text
Source Code
      ↓
Optimized HTML/CSS/JS
      ↓
Production Files
```

Command:

```bash
npm run build
```

When Vercel deploys a React app, it runs this command automatically.

---

# 3. What is a Runtime?

Build Time:

```text
Creating the application
```

Runtime:

```text
Application is currently running
```

Example:

Build:

```bash
npm run build
```

Runtime:

```text
User opens website
User clicks Login
Backend receives request
```

---

# 4. What is an API?

API stands for:

```text
Application Programming Interface
```

In simple words:

> A way for one program to talk to another.

Frontend:

```text
React Website
```

Backend:

```text
Express Server
```

Communication:

```text
Frontend
   ↓
POST /api/auth/login
   ↓
Backend
```

---

# 5. What is a Request?

When frontend asks backend for something.

Example:

```http
POST /api/auth/login
```

This is a request.

Think:

```text
Customer placing an order
```

---

# 6. What is a Response?

Backend replies.

Example:

```json
{
  "success": true
}
```

This is a response.

Think:

```text
Restaurant delivering food
```

---

# 7. What are HTTP Status Codes?

### 200

Success.

```text
Everything worked.
```

---

### 401

Unauthorized.

```text
You are not logged in.
```

---

### 404

Not Found.

```text
Route doesn't exist.
```

---

### 405

Method Not Allowed.

```text
Route exists but wrong request type.
```

Example:

```text
Trying POST on a GET route.
```

---

### 500

Server Error.

```text
Backend crashed.
```

---

### 503

Service Unavailable.

```text
Backend is alive
but dependency is unavailable.
```

Our case:

```text
MongoDB unavailable.
```

---

# 8. What is MongoDB Atlas?

MongoDB Atlas is:

```text
MongoDB hosted on the internet.
```

Instead of:

```text
mongodb://localhost
```

you get:

```text
mongodb+srv://...
```

Anyone with proper permissions can connect.

---

# 9. What is a Connection String?

Example:

```text
mongodb+srv://username:password@cluster.mongodb.net/studycompanion
```

This is basically:

```text
Address + Username + Password
```

for your database.

---

# 10. What is an Environment Variable?

Bad:

```js
const password = "my-secret-password";
```

Anyone can see it.

Good:

```js
process.env.MONGO_URI
```

Stored separately.

Think:

```text
Configuration hidden from source code.
```

---

# 11. What is CORS?

CORS stands for:

```text
Cross-Origin Resource Sharing
```

Example:

Frontend:

```text
https://sdfcfrontend.vercel.app
```

Backend:

```text
https://sdfcbackend.vercel.app
```

Different origins.

Browser asks:

```text
Can this website talk to that website?
```

Backend must answer:

```text
Yes.
```

Otherwise:

```text
CORS Error
```

---

# 12. What is a Cookie?

Small data stored by browser.

Example:

```text
token=abc123
```

Browser automatically sends it later.

Used for:

```text
Keeping users logged in.
```

---

# 13. What is JWT?

JWT:

```text
JSON Web Token
```

A signed identity card.

After login:

```text
Backend creates token
Browser stores token
```

Later:

```text
Browser sends token
Backend verifies token
```

No password needed again.

---

# 14. What is Authentication?

Question:

```text
Who are you?
```

Example:

```text
Login
```

Authentication verifies identity.

---

# 15. What is Authorization?

Question:

```text
What are you allowed to do?
```

Example:

```text
Student
```

Cannot access:

```text
Admin Dashboard
```

---

# 16. What is Serverless?

Traditional:

```text
My own server
running 24/7
```

Serverless:

```text
Function starts only when needed.
```

Vercel backend works this way.

---

# 17. What is a Middleware?

A checkpoint before route execution.

Example:

```js
requireDb
```

Flow:

```text
Request
   ↓
Middleware
   ↓
Route
```

Middleware can:

* Reject request
* Modify request
* Continue request

---

# 18. What is Git?

Version control.

Think:

```text
Save Game System
```

Commands:

```bash
git add .
git commit -m "message"
git push
```

---

# 19. What is GitHub?

Cloud storage for Git repositories.

Think:

```text
Google Drive for code.
```

---

# 20. What is Vercel?

Hosting platform.

Frontend:

```text
React
```

Backend:

```text
Express
```

can both be deployed here.

---

# 21. What Actually Happened During This Deployment?

1. Frontend build failed.
2. Frontend wasn't deploying.
3. Requests went to wrong URL.
4. 405 errors appeared.
5. CORS errors appeared.
6. MongoDB connection failed.
7. 503 errors appeared.
8. Environment variables fixed.
9. Backend connected.
10. Login worked.

This is a normal real-world deployment debugging process.

---

# Final Lesson

Programming is often:

```text
20% writing code
80% understanding why systems are not talking to each other
```

The better you understand infrastructure, the easier deployment becomes.
