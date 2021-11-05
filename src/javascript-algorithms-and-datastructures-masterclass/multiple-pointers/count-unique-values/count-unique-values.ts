/**
 * Implement a function called countUniqueValues, which accepts
 * a sorted array, and counts the unique values in the array.
 * There can be negative numbers in the array, but it will
 * always be sorted.
 */
export function countUniqueValues(arr: number[]) {
    if (!arr || arr.length === 0) {
        return 0;
    }

    let counter = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            counter++;
        }
    }

    return counter;
}
