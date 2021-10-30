import { isArray } from "../types/isArray.js";

/**
 * Concatenates all items to one array
 * 
 * @example
 *      concat(["a", "b", "c"], [1, 2, 3], "hey") -> ["a", "b", "c", 1, 2, 3, "hey"]
 */
export function concat(...items:any[]):Array<any> {
    let res = [];

    for(var i=0; i<arguments.length; i++) {
        var arg = arguments[i];

        if(isArray(arg)) res.push(...arg);
        else             res.push(arg);
    }

    return res;
}