const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const sections = [
  'about',
  'skills',
  'projects',
  'videos',
  'experience',
  'education',
  'testimonials',
  'contact',
];

sections.forEach((section) => {
  app.get(`/api/${section}`, (req, res) => {
    const filePath = path.join(__dirname, 'data', `${section}.json`);
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(404).json({ error: `${section} data not found` });
      }
      res.json(JSON.parse(data));
    });
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
}); 