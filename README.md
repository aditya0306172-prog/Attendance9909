# Event Attendance App

This project is a simple event attendance system with a web frontend and a Node.js backend.

## Features
- Register participants and generate QR codes
- Scan QR codes to mark attendance
- Admin dashboard to view and export attendance

## Setup Instructions

### 1. Install Node.js
Download and install Node.js from [nodejs.org](https://nodejs.org/).

### 2. Install Dependencies
Open PowerShell in the project folder and run:
```
npm install express cors body-parser
```

### 3. Start the Backend Server
Run the following command in PowerShell:
```
node server.js
```
The server will start at `http://localhost:5000`.

### 4. Open the Frontend
Open `pro.html` in your web browser.

## Endpoints
- `POST /register` — Register a participant
- `POST /attendance` — Mark attendance by QR code
- `GET /participants` — List all participants
- `GET /export` — Download attendance as CSV

## Notes
- Keep the backend server running while using the frontend.
- All data is stored in memory and will reset when the server restarts.


