# 🏛️ Historical Artifacts Tracker

An interactive web application to track, explore, and contribute historical artifacts from around the world.

---

## 🌐 Live Website
🔗 [Live Site](https://historical-artifacts-5b376.web.app/)  

---

## 🧠 Purpose

This project is built as part of an advanced assignment to demonstrate full-stack MERN development skills with secure authentication, protected routes, dynamic data handling, and modern UI/UX practices.

---

## ✨ Key Features

- 🔐 Firebase Authentication (Email/Password + Google)
- 🔁 JWT-based Route Protection
- 📦 MongoDB Atlas Database Integration
- 🔍 Search Artifacts by Name
- ❤️ Like/Unlike Toggle (stored in DB)
- ➕ Add, Update, Delete Your Own Artifacts
- 📂 View Liked Artifacts
- 🎨 Responsive and Premium UI with Tailwind & DaisyUI & MambaUI
- 🎬 Framer Motion Animations
- 📱 Mobile-first Responsive Design
- 🔎 Dynamic Page Titles
- ⚠️ 404 Not Found Page
- 📤 Firebase(client) & Vercel(server) Deployment


## 📋 Pages & Routes

Home Page with Banner, Top Liked Artifacts, Extra Sections |
Email/Password and Google Login |
New User Registration |
Protected: Add Artifact Form |
Protected: Full Artifact Details & Like Button |
Browse all artifacts + Search |
Protected: View, Update, Delete Your Artifacts |
Protected: View Liked Artifacts |
Protected: Update Form |
 404 Page |

---

## 📦Technology Used
- `react`
- `tailwind`
- `Node Js`
- `Express`
- `mongoDB`
- `react-router`
- `firebase`
- `axios`
---

### 🧑‍💻 Local Setup Instructions

Follow these steps to run the client project locally on your machine:

```bash
# 1. Clone the repository
git clone https://github.com/SazidSifat/antiques-artifacts-website-client.git
cd antiques-artifacts-website-client
```

### Dependencies
```json
{
   "dependencies": {
    "@emotion/react": "^11.14.0",
    "@tailwindcss/vite": "^4.1.8",
    "axios": "^1.9.0",
    "daisyui": "^5.0.43",
    "firebase": "^11.9.1",
    "lottie-react": "^2.4.1",
    "motion": "^12.17.3",
    "react": "^19.1.0",
    "react-awesome-reveal": "^4.3.1",
    "react-dom": "^19.1.0",
    "react-icons": "^5.5.0",
    "react-masonry-css": "^1.0.16",
    "react-router": "^7.6.2",
    "react-toastify": "^11.0.5",
    "sweetalert2": "^11.22.0",
    "swiper": "^11.2.8",
    "tailwindcss": "^4.1.8"
  },
  "devDependencies": {
    "@eslint/js": "^9.25.0",
    "@types/react": "^19.1.2",
    "@types/react-dom": "^19.1.2",
    "@vitejs/plugin-react": "^4.4.1",
    "eslint": "^9.25.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^16.0.0",
    "vite": "^6.3.5"
  }
}
```
### 2. Install dependencies
```bash
npm install
```
### 3. Create a .env file in the root directory and add the following:
```bash
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_id
VITE_appId=your_app_id
```

### 4. Start the development server
```bash
npm run dev
```
