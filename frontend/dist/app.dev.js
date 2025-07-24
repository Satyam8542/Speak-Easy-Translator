"use strict";

var finalText = '';
var speechOutput = document.getElementById('speechOutput');

function startRecognition() {
  var recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-US';

  recognition.onresult = function (event) {
    finalText = event.results[0][0].transcript;
    speechOutput.textContent = "You said: ".concat(finalText);
  };

  recognition.start();
}

function translateText() {
  var targetLang, res, data;
  return regeneratorRuntime.async(function translateText$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (finalText) {
            _context.next = 3;
            break;
          }

          alert("Please speak something first!");
          return _context.abrupt("return");

        case 3:
          targetLang = document.getElementById('languageSelect').value;
          _context.next = 6;
          return regeneratorRuntime.awrap(fetch('http://localhost:5000/api/translate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              text: finalText,
              targetLang: targetLang
            })
          }));

        case 6:
          res = _context.sent;
          _context.next = 9;
          return regeneratorRuntime.awrap(res.json());

        case 9:
          data = _context.sent;
          console.log('Response:', data); // 👈 Log to debug

          document.getElementById('translationResult').textContent = data.translatedText ? "Translation: ".concat(data.translatedText) : 'Translation failed!';

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
}
//# sourceMappingURL=app.dev.js.map
