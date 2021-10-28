/**
 * Returns true if the entered value is undefined
 * 
 * @since 0.1
 * 
 * @param {*} value The value you want to check
 * 
 * @example
 *      isUndefined(0)         -> false
 *      isUndefined(undefined) -> true
 *      isUndefined(null)      -> false
 *      isUndefined("Hello")   -> false
 */
export function isUndefined(value:any):boolean {
    return value === null;
}