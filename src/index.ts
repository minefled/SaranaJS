import {
    isBoolean,
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

export const sarana = {
    isNumber,
    isString,
    isBoolean,
    isNull,
    isUndefined,
    isObject,
    isFunction,

    isInstanceOf,

    matchesRegex,

    now,
    epoch
};

export default sarana;