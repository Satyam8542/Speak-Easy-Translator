"use strict";

var axios = require('axios');

function testTranslation() {
  var res;
  return regeneratorRuntime.async(function testTranslation$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.post('http://localhost:5001/translate', {
            q: 'Hello',
            source: 'en',
            target: 'fr',
            format: 'text'
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          }));

        case 3:
          res = _context.sent;
          console.log('Translation:', res.data);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error('Error:', _context.t0.message);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

testTranslation();
//# sourceMappingURL=test-translate.dev.js.map
