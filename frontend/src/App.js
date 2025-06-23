import React, { useState } from 'react';
import axios from 'axios';
import {TextField,Button,Container,Typography,Box,Link } from '@mui/material';

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortCode, setShortCode] = useState('');
  const [validity, setValidity] = useState(30);
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = async () => {
    try {
      const response = await axios.post('http://localhost:5000/shorten', {longUrl,shortCode,validity});
      setShortUrl(response.data.shortUrl);
    }
    catch (error) {alert('Error shortening URL');}
  };
return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          URL Shortener
        </Typography>
        <TextField
          label="Long URL"
          variant="outlined"
          fullWidth
          margin="normal"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
  />
        <TextField
          label="Custom Short Code (Optional)"
          variant="outlined"
          fullWidth
          margin="normal"
          value={shortCode}
          onChange={(e) => setShortCode(e.target.value)}
        />
        <TextField
          label="Validity in Minutes"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
          value={validity}
          onChange={(e) => setValidity(e.target.value)}
        />
<Button variant="contained" color="primary" onClick={handleShorten} sx={{ mt: 2 }}>Shorten URL</Button>
        {shortUrl && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">Shortened URL:</Typography>
            <Link href={shortUrl} target="_blank" rel="noopener">
              {shortUrl}
            </Link></Box>
        )}
      </Box>
  </Container>
  );
}

export default App;
