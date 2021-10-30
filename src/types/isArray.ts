import { isInstanceOf } from "./isInstanceOf.js";

/**
 * Returns a boolean indicating whether the passed value is an array or not
 * 
 * @since 0.1
 * 
 * @param value The variable you want to check
 * 
 * @example
 *      isArray([1, 2, 3])      -> true
 *      isArray("Hello World")  -> false
 *      isArray(0)              -> false
 */
export function isArray(value:any):boolean {
    return isInstanceOf(value, Array);
}