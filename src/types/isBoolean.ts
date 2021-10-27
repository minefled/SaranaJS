/**
 * Returns true if the value is a boolean
 * 
 * @since 0.1
 * 
 * @param {any} value The value you want to check
 * 
 * @example
 *      isBoolean("Hello World")    -> false
 *      isBoolean(true)             -> true
 *      isBoolean(false)            -> true
 *      isBoolean(0)                -> false
 */
export function isBoolean(value:any):boolean {
    return (typeof value === "boolean");
}