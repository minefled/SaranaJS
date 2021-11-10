import { isArray } from "../types/isArray.js";

/**
 * Removes the first occurrence of the item from the array
 * 
 * @since 1.0.1
 * 
 * @param arr The array you want to remove the item from
 * @param itm The item you want to remove
 * 
 * @example
 *      remove(["Hello", "World"], "Hello") -> "Hello World"
*/
export function remove(arr:Array<any>, itm:any):Array<any> {
    if(!isArray(arr)) throw new Error(`remove() - input array must be an Array! (Got: ${arr})`);

    let i = arr.indexOf(itm);

    if(i < 0) /* Item not in array */ return arr;
    return arr.splice(i, 1);
}