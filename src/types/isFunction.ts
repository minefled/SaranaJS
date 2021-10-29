/**
 * Returns true if the value is a function
 * 
 * @since 0.1
 * 
 * @param {any} value The value you want to check
 * 
 * @example
 *      isFunction("Hello World")   -> false
 *      isFunction(42)              -> false
 *      isBoolean({})               -> false
 *      isBoolean(function() {})    -> true
 */
export function isFunction(value:any):boolean {
    return (typeof value === "function");
}