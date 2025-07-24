const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../db');

router.post('/', async (req, res) => {
  const { text, targetLang } = req.body;
  console.log('Received text:', text);
  console.log('Target language:', targetLang);

  try {
    const response = await axios.post('http://localhost:5001/translate', {
      q: text,
      source: 'en',
      target: targetLang,
      format: 'text'
    }, {
      headers: { 'Content-Type': 'application/json' }
    });

    console.log('Translation API response:', response.data); 

    const translatedText = response.data.translatedText;
    
    // Save to DB
    db.query('INSERT INTO translations (original_text, translated_text, source_lang, target_lang) VALUES (?, ?, ?, ?)',
      [text, translatedText, 'en', targetLang]);

    res.json({ translatedText });
  } catch (err) {
    console.error('Translation Error:', err.message);             
    console.error('Full Error:', err.response?.data || err);     
    res.status(500).json({ error: 'Translation failed' });
  }
  
});


module.exports = router;