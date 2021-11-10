import {
    isArray,
    isBoolean,
    isDate,
    isFunction,
    isInstanceOf,
    isNull,
    isNumber,
    isObject,
    isRegExp,
    isString,
    isUndefined
} from "./types/_types.js"

import {
    now,
    epoch
} from "./date-and-time/_date-and-time.js";

import {
    matchesRegex,
    capitalize,
    lowercase
} from "./string/_string.js";

import {
    concat,
    chunk,
    join,
    remove
} from "./array/_array.js";

import {
    mapNum
} from "./math/_math.js";

import { _version } from "./internal/version.js"

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
    isRegExp,

    isInstanceOf,

    matchesRegex,
    capitalize,
    lowercase,

    concat,
    chunk,
    join,
    remove,

    mapNum,

    now,
    epoch,

    _version
};

export default sarana;