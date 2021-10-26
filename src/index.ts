import { isNumber } from "./types/isNumber.js";
import { isString } from "./types/isString.js";

import { now } from "./date-and-time/now.js";
import { epoch } from "./date-and-time/epoch.js";

export const sarana = {
    isNumber,
    isString,

    now,
    epoch
};

export default sarana;