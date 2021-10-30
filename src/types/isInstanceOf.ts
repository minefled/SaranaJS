import { isFunction } from "./isFunction.js";
import { isObject } from "./isObject.js";

/**
 * Returns true if the object is instance of the instance
 * 
 * @since 0.1
 * 
 * @param {Object} obj The object you want to the the instance check on
 * @param {Function} instance 
 * 
 * @example
 * 
 *      class A {}
 *      let b = new A();
 * 
 *      isInstanceOf(b, A);     -> true
 * 
 */
export function isInstanceOf(obj:Object, instance:Function):boolean {
    if(!isObject(obj)) return false;
    if(!isFunction(instance)) return false;

    return (obj instanceof instance);
}