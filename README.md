# Memory-Board

A full-stack MERN application for creating, managing, and organizing notes. Built with MongoDB, Express.js, React, and Node.js.

## Features

- ✨ Create, read, update, and delete notes
- 🎨 Modern UI with Tailwind CSS and DaisyUI
- 🚀 Fast and responsive with Vite
- 🔒 Rate limiting with Upstash Redis
- 📱 Fully responsive design
- ⚡ Real-time toast notifications

## Tech Stack

**Frontend:**
- React 19
- Vite
- Tailwind CSS 4
- DaisyUI
- React Router
- Axios
- React Hot Toast
- Lucide React (icons)

**Backend:**
- Node.js
- Express.js 5
- MongoDB with Mongoose
- Upstash Redis (rate limiting)
- CORS

## Project Structure

```
MERNDeployment/
├── backend/
│   ├── src/
│   │   ├── config/        # Database configuration
│   │   ├── controllers/   # Route controllers
│   │   ├── middleware/    # Rate limiter & other middleware
│   │   ├── models/        # Mongoose models
│   │   ├── routes/        # API routes
│   │   └── server.js      # Entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── lib/           # Utilities
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
PORT=XXXX
MONGODB_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
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

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get note by ID |
| POST | `/api/notes` | Create new note |
| PUT | `/api/notes/:id` | Update note |
| DELETE | `/api/notes/:id` | Delete note |

## Usage

1. **Create Note**: Click the create button to add a new note with title and content
2. **View Notes**: All notes are displayed on the home page
3. **Edit Note**: Click on a note to view details and edit
4. **Delete Note**: Remove notes you no longer need

## Scripts

**Backend:**
- `npm run dev` - Start development server

**Frontend:**
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Author

[Shiv7722](https://www.github.com/Shiv7722)

## License

ISC
