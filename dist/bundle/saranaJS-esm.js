/*
|  SaranaJS
|
|  copyright minefled, 2021
|  Released under the MIT License
*/

// dist/esm/types/isNumber.js
function isNumber(value) {
  return typeof value === "number";
}

// dist/esm/types/isString.js
function isString(value) {
  return typeof value === "string";
}

// dist/esm/date-and-time/now.js
function now() {
  return new Date();
}

// dist/esm/date-and-time/epoch.js
function epoch() {
  return new Date(0);
}

// dist/esm/index.js
var sarana = {
  isNumber,
  isString,
  now,
  epoch
};
var esm_default = sarana;
export {
  esm_default as default,
  sarana
};
