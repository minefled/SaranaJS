import { isNumber } from "./types/isNumber.js";
import { isString } from "./types/isString.js";
import { isBoolean } from "./types/isBoolean.js";
import { isNull } from "./types/isNull.js";
import { isUndefined } from "./types/isUndefined.js";
import { isObject } from "./types/isObject.js";

import { now } from "./date-and-time/now.js";
import { epoch } from "./date-and-time/epoch.js";

export const sarana = {
    isNumber,
    isString,
    isBoolean,
    isNull,
    isUndefined,
    isObject,

    now,
    epoch
};

export default sarana;