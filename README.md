Study Companion — Deploying Frontend and Backend to Vercel

Quick steps to deploy both apps using GitHub + Vercel:

1. Create a GitHub repository and push this workspace.
   - `git init`
   - `git add .`
   - `git commit -m "Initial commit"
   - `git branch -M main`
   - `git remote add origin <your-github-repo-url>`
   - `git push -u origin main`

2. On Vercel, import two projects from the same GitHub repo:
   - Frontend: select the `studycompfor_gate` subdirectory. Framework: Create React App. Build: `npm run build`.
   - Backend: select the `backend` subdirectory. Vercel will use `vercel.json` and `@vercel/node` to deploy `server.js`.

3. Set environment variables in each Vercel project (Dashboard → Settings → Environment Variables):
   - Backend project: `MONGO_URI` (the Mongo connection string), `JWT_SECRET`, `FRONTEND_URL` (frontend URL produced by Vercel)
   - Frontend project: if needed, set `REACT_APP_API_URL` to your backend URL.

4. Trigger a deploy from Vercel; it will build and deploy both projects.

If you'd like, provide the MongoDB URI and the GitHub repo URL and I can continue with exact env values and push instructions.
