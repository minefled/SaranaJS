import { isInstanceOf } from "../types/isInstanceOf.js";

/**
 * Returns a boolean indicating whether there is a pattern in the input string matching the expression
 * 
 * @param str The string you want to search
 * @param expression The expression you want to search for
 */
export function matchesRegex(str:string, expression:RegExp):boolean {
    if(!isInstanceOf(expression, RegExp)) return false;

    return expression.test(str);
}