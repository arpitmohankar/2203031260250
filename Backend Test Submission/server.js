const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const urlDatabase ={};

function generateShortCode(url){
  let hash = 0;
  for (let i = 0; i < url.length; i++){
    const char =url.charCodeAt(i);
    hash=(hash<<5)-hash+char;
    hash =hash&hash;
  }
  return Math.abs(hash).toString(36).substring(0, 6);
}

app.post('/shorten', (req, res) => {
  const { longUrl,shortCode,validity =30} =req.body;
  const baseUrl = `http://localhost:${PORT}`;
  const existingUrl = Object.values(urlDatabase).find(url =>url.longUrl===longUrl);
  if (existingUrl){
    return res.status(200).json(existingUrl);
  }  
  
  
const code = shortCode || generateShortCode(longUrl);
  const shortUrl =`${baseUrl}/${code}`;
  urlDatabase[code] = {
    longUrl,
    shortCode: code,
    shortUrl,
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + validity * 60000) // Validity in minutes
  };
res.status(201).json(urlDatabase[code]);
});

app.get('/:shortCode', (req, res) => {
  const { shortCode } = req.params;
  const url = urlDatabase[shortCode];

if (url) {
    if (new Date() > url.expiresAt){ 
     delete urlDatabase[shortCode];
      return res.status(404).json({ error: 'URL expired' });}
    
      return res.redirect(url.longUrl);
  } 
  else {
    return res.status(404).json({ error: 'URL not found' });
  }
});

app.listen(5000, () => {console.log(`Server is running on http://localhost:5000`);});
