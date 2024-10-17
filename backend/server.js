import fetch from 'node-fetch';  // Use ES module import
import dotenv from 'dotenv';
dotenv.config();  // Load environment variables from .env file

import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json()); // For parsing application/json

// Serve the static files from the React frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));

  // Serve the frontend's index.html for all non-API routes (React Router)
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
  });
}

// Get the whitelisted IPs from the environment variable and split into an array
const whitelistedIPs = process.env.VITE_WHITELISTED_IPS.split(',').map(ip => ip.trim());

// Backend API routes
app.post("/api/check-access", (req, res) => {
  const { ip } = req.body;
  console.log(`Received IP: ${ip}`);
  
  if (whitelistedIPs.includes(ip)) {
    return res.json({ hasAccess: true });
  } else {
    return res.json({ hasAccess: false });
  }
});

// Example reCAPTCHA verification route
app.post('/api/verify-recaptcha', async (req, res) => {
  const { token } = req.body;

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  console.log("Running reCAPTCHA verification...");
  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secretKey}&response=${token}`,
  });

  const data = await response.json();
  if (data.success) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
