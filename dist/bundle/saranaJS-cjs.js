/*
|  SaranaJS
|
|  copyright minefled, 2021
|  Released under the MIT License
*/

var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// dist/cjs/types/isNumber.js
var require_isNumber = __commonJS({
  "dist/cjs/types/isNumber.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isNumber = void 0;
    function isNumber(value) {
      return typeof value === "number";
    }
    exports2.isNumber = isNumber;
  }
});

// dist/cjs/types/isString.js
var require_isString = __commonJS({
  "dist/cjs/types/isString.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isString = void 0;
    function isString(value) {
      return typeof value === "string";
    }
    exports2.isString = isString;
  }
});

// dist/cjs/date-and-time/now.js
var require_now = __commonJS({
  "dist/cjs/date-and-time/now.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.now = void 0;
    function now() {
      return new Date();
    }
    exports2.now = now;
  }
});

// dist/cjs/date-and-time/epoch.js
var require_epoch = __commonJS({
  "dist/cjs/date-and-time/epoch.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.epoch = void 0;
    function epoch() {
      return new Date(0);
    }
    exports2.epoch = epoch;
  }
});

// dist/cjs/index.js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sarana = void 0;
var isNumber_js_1 = require_isNumber();
var isString_js_1 = require_isString();
var now_js_1 = require_now();
var epoch_js_1 = require_epoch();
exports.sarana = {
  isNumber: isNumber_js_1.isNumber,
  isString: isString_js_1.isString,
  now: now_js_1.now,
  epoch: epoch_js_1.epoch
};
exports.default = exports.sarana;
