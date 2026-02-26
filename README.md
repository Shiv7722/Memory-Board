# Memory-Board

A full-stack MERN application for creating, managing, and organizing personal notes with user authentication. Built with MongoDB, Express.js, React, and Node.js.

## Features

- 🔐 User authentication (signup/login/logout)
- 👤 User-specific notes - each user sees only their own notes
- ✨ Create, read, update, and delete notes
- 🎨 Modern UI with Tailwind CSS and DaisyUI
- 🚀 Fast and responsive with Vite
- 🔒 Rate limiting with Upstash Redis
- 🍪 JWT-based authentication with HTTP-only cookies
- 🔑 Password hashing with bcrypt
- 📱 Fully responsive design
- ⚡ Real-time toast notifications
- 🛡️ Protected routes on frontend and backend

## Tech Stack

**Frontend:**
- React 19
- Vite
- Tailwind CSS 4
- DaisyUI
- React Router
- React Context API (Auth state)
- Axios
- React Hot Toast
- Lucide React (icons)

**Backend:**
- Node.js
- Express.js 5
- MongoDB with Mongoose
- JWT (JSON Web Tokens)
- bcryptjs (password hashing)
- Cookie Parser
- Upstash Redis (rate limiting)
- CORS

## Project Structure

```
MERNDeployment/
├── backend/
│   ├── src/
│   │   ├── config/        # Database configuration
│   │   ├── controllers/   # Route controllers (auth, notes)
│   │   ├── middleware/    # Auth, rate limiter middleware
│   │   ├── models/        # Mongoose models (User, Note)
│   │   ├── routes/        # API routes (auth, notes)
│   │   └── server.js      # Entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── context/       # Auth context
│   │   ├── lib/           # Utilities (axios)
│   │   ├── pages/         # Page components
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   └── package.json
└── README.md
```

## Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB
- Upstash Redis account

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
JWT_SECRET=your_long_random_secret_key
```

**Generate JWT_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

4. Start the server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will run on `http://localhost:5173`

## API Endpoints

### Authentication
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/signup` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| POST | `/api/auth/logout` | Logout user | No |
| GET | `/api/auth/me` | Get current user | Yes |

### Notes
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/notes` | Get user's notes | Yes |
| GET | `/api/notes/:id` | Get note by ID | Yes |
| POST | `/api/notes` | Create new note | Yes |
| PUT | `/api/notes/:id` | Update note | Yes |
| DELETE | `/api/notes/:id` | Delete note | Yes |

## Usage

1. **Sign Up**: Create a new account at `/signup`
2. **Login**: Login with your credentials at `/login`
3. **Create Note**: Click the create button to add a new note with title and content
4. **View Notes**: All your notes are displayed on the home page
5. **Edit Note**: Click on a note to view details and edit
6. **Delete Note**: Remove notes you no longer need
7. **Logout**: Click the logout button to end your session

## Security Features

- ✅ Passwords hashed with bcrypt (10 salt rounds)
- ✅ JWT tokens stored in HTTP-only cookies
- ✅ Protected API routes with authentication middleware
- ✅ User-specific data isolation
- ✅ Token expiration (7 days)
- ✅ CORS configured for credentials
- ✅ Rate limiting to prevent abuse

## Scripts

**Root:**
- `npm run build` - Build frontend for production
- `npm run start` - Start production server

**Backend:**
- `npm run dev` - Start development server
- `npm run start` - Start production server

**Frontend:**
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

The app is configured for deployment on platforms like Render, Vercel, or Railway:

1. Set environment variables on your hosting platform
2. Run `npm run build` to build the frontend
3. Run `npm run start` to start the backend server
4. Backend serves the frontend static files in production

## Author

[Shiv7722](https://www.github.com/Shiv7722)

## License

ISC
