/**
 * Write a recursive function called someRecursive which
 * accepts an array and a callback. The function returns
 * true if a single value in the array returns true when
 * passed to thecallback. Otherwise it returns false.
 */
export function someRecursive(
    array: number[],
    cb: (val: number) => boolean,
): boolean {
    if (array.length === 0) {
        return false;
    }

    return someRecursive(array.slice(1), cb);
}
