import { isInstanceOf } from "./isInstanceOf.js";

/**
 * Returns a boolean indicating whether the value is a regular expression
 * 
 * @param value The variable you want to check
 */
export function isRegExp(value:any):boolean {
    return isInstanceOf(value, RegExp);
}