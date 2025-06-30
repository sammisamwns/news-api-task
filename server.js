const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = '8d7e089a7d0b4489ad3d71492eb152cb'; // Your actual NewsAPI key

// Serve static HTML/CSS/JS files from public/
app.use(express.static(path.join(__dirname, 'public')));

// Backend route to fetch health news
app.get('/health-news', async (req, res) => {
  try {
    const url = `https://newsapi.org/v2/everything?q=health&language=en&sortBy=publishedAt&apiKey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data); // return news data to frontend
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Error fetching health news' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
