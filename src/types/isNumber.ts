/**
 * Returns true if the entered variable is a number
 * 
 * @since 0.1
 * 
 * @param {*} value The value you want to check
 * 
 * @example
 *      isNumber(0)         -> true
 *      isNumber(Infinity)  -> true
 *      isNumber("foo")     -> false
 *      isNumber(null)      -> false
 */
export function isNumber(value:any):boolean {
    return typeof value === "number" && value != NaN;
}