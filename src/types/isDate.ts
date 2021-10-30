import { isInstanceOf } from "./isInstanceOf.js";

/**
 * Returns a boolean indicating whether the passed value is a Date
 * 
 * @since 0.1
 * 
 * @param value The variable you want to check
 */
export function isDate(value:any):boolean {
    return isInstanceOf(value, Date);
}