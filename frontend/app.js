let finalText = '';
const speechOutput = document.getElementById('speechOutput');

function startRecognition() {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-US';
  recognition.onresult = (event) => {
    finalText = event.results[0][0].transcript;
    speechOutput.textContent = `You said: ${finalText}`;
  };
  recognition.start();
}

async function translateText() {
  if (!finalText) {
    alert("Please speak something first!");
    return;
  }

  const targetLang = document.getElementById('languageSelect').value;
  const res = await fetch('http://localhost:5000/api/translate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: finalText, targetLang })
  });

  const data = await res.json();
  console.log('Response:', data); // 👈 Log to debug

  document.getElementById('translationResult').textContent =
    data.translatedText ? `Translation: ${data.translatedText}` : 'Translation failed!';
}
