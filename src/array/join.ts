import { isArray } from "../types/isArray.js";

/**
 * Joins all elements in the passed array, separated by the separator
 * 
 * @since 0.1
 * 
 * @param arr The array you want to join together
 * @param separator The string that should stand between joined elements
 * 
 * @example
 *      join(["Hello", "World"], " ") -> "Hello World"
*/
export function join(arr:Array<any>, separator:string):string {
    if(!isArray(arr)) throw new Error(`join() - input array must be an Array! (Got: ${arr})`);

    return arr.join(separator);
}