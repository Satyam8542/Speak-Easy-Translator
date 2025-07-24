const axios = require('axios');

async function testTranslation() {
  try {
    const res = await axios.post('http://localhost:5001/translate', {
      q: 'Hello',
      source: 'en',
      target: 'fr',
      format: 'text'
    }, {
      headers: { 'Content-Type': 'application/json' }
    });

    console.log('Translation:', res.data);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

testTranslation();
