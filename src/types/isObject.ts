/**
 * Returns true if the entered value is an object
 * 
 * @since 0.1
 * 
 * @param {*} value The value you want to check
 * 
 * @example
 *      isNumber(0)             -> false
 *      isObject({"foo":"bar"}) -> true
 *      isNumber("foo")         -> false
 *      isNumber(null)          -> false
 */
 export function isObject(value:any):boolean {
    return typeof value === "object";
}