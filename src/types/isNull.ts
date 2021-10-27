/**
 * Returns true if the entered value is null
 * 
 * @since 0.1
 * 
 * @param {*} value The value you want to check
 * 
 * @example
 *      isNull(0)         -> false
 *      isNull("abc")     -> false
 *      isNull(null)      -> true
 *      isNull({})        -> false
 */
export function isNull(value:any):boolean {
    return value === null;
}