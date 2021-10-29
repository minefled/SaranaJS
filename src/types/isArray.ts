import { isInstanceOf } from "./isInstanceOf.js";

/**
 * Returns a boolean indicating wether the passed value is an array or not
 * 
 * @param value The variable you want to check
 */
export function isArray(value:any):boolean {
    return isInstanceOf(value, Array);
}