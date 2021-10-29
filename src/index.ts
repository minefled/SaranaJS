import {
    isArray,
    isBoolean,
    isDate,
    isFunction,
    isInstanceOf,
    isNull,
    isNumber,
    isObject,
    isString,
    isUndefined
} from "./types/types.js"

import {
    now,
    epoch
} from "./date-and-time/date-and-time.js";

import {
    matchesRegex
} from "./string/string.js";

import {
    concat
} from "./array/array.js";

export const sarana = {
    isNumber,
    isString,
    isBoolean,
    isNull,
    isUndefined,
    isObject,
    isFunction,
    isArray,
    isDate,

    isInstanceOf,

    matchesRegex,

    concat,

    now,
    epoch
};

export default sarana;