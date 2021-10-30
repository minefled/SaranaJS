/**
 * Maps the entered value (v) to the specified range
 * 
 * @since 0.1
 * 
 * @param v The value you want to map
 * @param in_min The smallest value that can come in your input
 * @param in_max The biggest number that can be your input
 * @param out_min The lowest output value
 * @param out_max The highest output value
 */
export function mapNum(v:number, in_min:number, in_max:number, out_min:number, out_max:number):number {
    let in_range    = (in_max - in_min);
    let out_range   = (out_max - out_min);

    return (v - in_min) * out_range / in_range + out_min;
}