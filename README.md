# Greeting App

A simple full-stack application that provides a personalized greeting based on user input. Built with Node.js, Express, React, and Tailwind CSS.

## Features
- Backend API built with Express.js
- Frontend built with React and styled using Tailwind CSS
- User input field and button to fetch greeting message
- Notification sound on successful greeting response

## Tech Stack
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express
- **Deployment:** Vercel (frontend) / Render(backend)

## Installation & Setup

### Prerequisites
- Node.js installed on your machine
- npm or yarn package manager

### Steps to Run Locally

#### 1. Clone the Repository
```bash
git clone https://github.com/your-username/greet-app.git
cd greet-app
```

#### 2. Backend Setup
```bash
cd backend
npm install
node server.js
```

#### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

The frontend should now be running on `http://localhost:3000` and the backend on `http://localhost:5000`.

## API Endpoint
- `GET /api/greet?name=YourName` - Returns a greeting message.

