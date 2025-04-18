const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Discord bot setup
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.once('ready', () => {
  console.log('Discord bot is ready!');
});

client.login(process.env.DISCORD_BOT_TOKEN).catch(console.error);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'secret-key',
  resave: false,
  saveUninitialized: false,
}));

// Authentication middleware
function authMiddleware(req, res, next) {
  if (req.session && req.session.loggedIn) {
    next();
  } else {
    res.redirect('/login.html');
  }
}

// Serve static files with auth protection except login.html and static assets
app.use((req, res, next) => {
  if (req.path === '/login.html' || req.path.startsWith('/static/') || req.path === '/favicon.ico') {
    next();
  } else {
    authMiddleware(req, res, next);
  }
});

app.use(express.static(path.join(__dirname)));

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Login attempt:', username, password); // Debug log
  // Replace with secure authentication
  if (username === 'admin' && password === 'password123') {
    req.session.loggedIn = true;
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Logout endpoint
app.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ success: true });
  });
});

// Endpoint to send alert message
app.post('/api/alert', async (req, res) => {
  const { channelId, message } = req.body;
  if (!channelId || !message) {
    return res.status(400).json({ error: 'channelId and message are required' });
  }

  try {
    const channel = await client.channels.fetch(channelId);
    if (!channel) {
      return res.status(404).json({ error: 'Channel not found' });
    }
    await channel.send(message);
    res.json({ success: true, message: 'Alert sent to Discord' });
  } catch (error) {
    console.error('Error sending alert:', error);
    res.status(500).json({ error: 'Failed to send alert' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
