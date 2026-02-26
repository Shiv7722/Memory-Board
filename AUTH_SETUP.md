# Authentication Setup Instructions

## Backend Setup

1. Install new dependencies:
```bash
cd backend
npm install bcryptjs jsonwebtoken cookie-parser
```

2. Add JWT_SECRET to your .env file:
```env
JWT_SECRET=your_secret_key_here_make_it_long_and_random
```

## Frontend Setup

No additional dependencies needed - all required packages are already installed.

## Files Created/Modified

### Backend:
- ✅ models/User.js - User model
- ✅ models/Note.js - Updated with userId field
- ✅ controllers/authController.js - Auth logic (signup, login, logout, getMe)
- ✅ controllers/notesController.js - Updated to filter by userId
- ✅ middleware/authMiddleware.js - JWT verification
- ✅ routes/authRoutes.js - Auth endpoints
- ✅ server.js - Added auth routes and cookie parser
- ✅ package.json - Added dependencies

### Frontend:
- ✅ context/AuthContext.jsx - Auth state management
- ✅ components/ProtectedRoute.jsx - Route protection
- ✅ components/Navbar.jsx - Updated with user info and logout
- ✅ pages/SignupPage.jsx - Registration page
- ✅ pages/LoginPage.jsx - Login page
- ✅ lib/axios.js - Added withCredentials
- ✅ App.jsx - Added AuthProvider and protected routes

## How to Test

1. Start backend: `cd backend && npm run dev`
2. Start frontend: `cd frontend && npm run dev`
3. Visit http://localhost:5173/signup
4. Create an account
5. Login with your credentials
6. Create notes - they will be user-specific
7. Logout and login with different account - notes are separate

## API Endpoints

- POST /api/auth/signup - Register new user
- POST /api/auth/login - Login user
- POST /api/auth/logout - Logout user
- GET /api/auth/me - Get current user
- All /api/notes/* routes now require authentication

## Features Implemented

✅ User registration with password hashing
✅ User login with JWT tokens
✅ Cookie-based authentication
✅ Protected routes (frontend & backend)
✅ User-specific notes
✅ Logout functionality
✅ Auto-redirect to login if not authenticated
✅ Welcome message with username
✅ Persistent login (7 days)
