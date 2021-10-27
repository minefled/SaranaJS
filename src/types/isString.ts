/**
 * Returns true if the value is a string
 * 
 * @since 0.1
 * 
 * @param {any} value The value you want to check
 * 
 * @example
 *      isString("Hello World") -> true
 *      isString(0)             -> false
 *      isString(undefined)     -> false
 *      isString("foo")         -> true
 */
export function isString(value:any):boolean {
    return (typeof value === "string");
}