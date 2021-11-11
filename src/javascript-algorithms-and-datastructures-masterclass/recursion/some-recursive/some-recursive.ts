/**
 * Write a recursive function called someRecursive which
 * accepts an array and a callback. The function returns
 * true if a single value in the array returns true when
 * passed to the callback. Otherwise it returns false.
 */
export function someRecursive(
    array: number[],
    cb: (val: number) => boolean,
): boolean {
    if (array.length === 0) {
        return false;
    }

    if (cb(array[0])) {
        return true;
    }

    return someRecursive(array.slice(1), cb);
}
