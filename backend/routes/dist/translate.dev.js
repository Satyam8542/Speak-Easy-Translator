"use strict";

var express = require('express');

var router = express.Router();

var axios = require('axios');

var db = require('../db');

router.post('/', function _callee(req, res) {
  var _req$body, text, targetLang, response, translatedText;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, text = _req$body.text, targetLang = _req$body.targetLang;
          console.log('Received text:', text);
          console.log('Target language:', targetLang);
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(axios.post('http://localhost:5001/translate', {
            q: text,
            source: 'en',
            target: targetLang,
            format: 'text'
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          }));

        case 6:
          response = _context.sent;
          console.log('Translation API response:', response.data); // 👈 Add this

          translatedText = response.data.translatedText; // Save to DB

          db.query('INSERT INTO translations (original_text, translated_text, source_lang, target_lang) VALUES (?, ?, ?, ?)', [text, translatedText, 'en', targetLang]);
          res.json({
            translatedText: translatedText
          });
          _context.next = 17;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](3);
          console.error('Translation Error:', _context.t0.message); // 👈 Add this

          res.status(500).json({
            error: 'Translation failed'
          });

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 13]]);
});
module.exports = router;
//# sourceMappingURL=translate.dev.js.map
