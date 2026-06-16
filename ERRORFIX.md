# Study Companion - Deployment Errors and Fixes

## Error 1

### Symptom

405 Method Not Allowed

Request sent to:

https://sdfcfrontend.vercel.app/api/auth/login

### Cause

Frontend was calling itself instead of backend.

### Fix

Use:

```js
const API_BASE_URL =
  process.env.REACT_APP_API_URL ||
  "https://sdfcbackend.vercel.app";
```

Add environment variable:

REACT_APP_API_URL=https://sdfcbackend.vercel.app

Redeploy frontend.

---

## Error 2

### Symptom

Frontend deployment failed.

Build log:

Treating warnings as errors because process.env.CI = true.

### Cause

Invalid anchor tag.

```jsx
<a href="#">
  Forgot Password?
</a>
```

### Fix

Replace with:

```jsx
<button type="button">
  Forgot Password?
</button>
```

or

```jsx
<a href="/forgot-password">
  Forgot Password?
</a>
```

Redeploy frontend.

---

## Error 3

### Symptom

CORS error.

```text
No 'Access-Control-Allow-Origin' header present
```

### Cause

Frontend preview deployment URL was not whitelisted.

Example:

https://sdfcfrontend-inf4drfn0-vedu989we-6465s-projects.vercel.app

### Fix

Update backend CORS configuration.

```js
app.use(cors({
  origin: frontendOrigins,
  credentials: true
}));
```

Ensure production frontend URL is included.

---

## Error 4

### Symptom

503 Service Unavailable

### Cause

Database connection unavailable.

Middleware:

```js
if (!dbConnected)
```

blocked requests.

### Fix

Verify:

* MONGO_URI exists
* Atlas database user exists
* Atlas password correct
* Atlas network access configured
* Backend redeployed after env changes

---

## Error 5

### Symptom

MongoDB Atlas connection fails.

### Causes

* Wrong username
* Wrong password
* Password contains special characters
* Incorrect connection string
* Atlas network restrictions

### Fix

Use Atlas generated connection string.

Example:

```text
mongodb+srv://username:password@cluster.mongodb.net/studycompanion?retryWrites=true&w=majority
```

If password contains:

```text
@
#
%
&
/
```

URL encode it.

---

## Error 6

### Symptom

Environment variables changed but app behavior unchanged.

### Cause

Deployment not rebuilt.

### Fix

Redeploy after every environment variable change.

---

## Error 7

### Symptom

Authentication works locally but not in production.

### Cause

Cookie configuration mismatch.

### Fix

Use:

```js
sameSite: "none",
secure: true
```

for production.

---

## Debug Checklist

Frontend

* Check Network Tab
* Verify request URL
* Verify response body
* Verify cookies

Backend

* Check Runtime Logs
* Check Vercel Function Logs
* Verify env variables

MongoDB

* Verify Atlas user
* Verify Atlas network access
* Verify connection string

---

## Lessons Learned

1. Verify request URL first.
2. Fix build errors before debugging runtime issues.
3. Check CORS before changing backend logic.
4. Verify environment variables after deployment.
5. Read deployment logs before rewriting code.
6. Test production URLs, not only localhost.
7. Solve one error layer at a time.
