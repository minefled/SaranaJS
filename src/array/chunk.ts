import { isArray } from "../types/isArray.js";
import { isNumber } from "../types/isNumber.js";

/**
 * Splits the input array into smaller chunks, each having the length of chunkSize
 * 
 * @since 0.1
 * 
 * @param input The array you want to split up
 * @param chunkSize The size of each chunk
 */
export function chunk(input:Array<any>, chunkSize:number=2):Array<any> {
    if(!isArray(input))         throw new TypeError(`chunk() - input must be an Array! Input: ${chunkSize}`);
    if(!isNumber(chunkSize))    throw new TypeError(`chunk() - chunkSize must be a number, not '${typeof chunkSize}'`);
    if(chunkSize < 1)           throw new Error(`chunk() - chunkSize has to be at least 1, got ${chunkSize}`);

    let arr:Array<any> = [];

    for(var i=0; i<input.length; i += chunkSize) {
        arr.push(
            input.slice(i, i+chunkSize)
        );
    }

    return arr;
}