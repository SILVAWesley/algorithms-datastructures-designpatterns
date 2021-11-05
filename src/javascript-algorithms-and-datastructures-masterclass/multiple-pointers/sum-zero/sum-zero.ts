/**
 * Write a function called sumZero which accepts a sorted array
 * of intergers. The function should find the first pair where
 * the sum is 0. Return an array that includes both values that
 * sum to zero ro undefined if a pair does not exist.
 */
export function sumZero(arr: number[]) {
    let lowerPointer = 0;
    let higherPointer = arr.length - 1;

    while (lowerPointer < higherPointer) {
        const diff = arr[lowerPointer] + arr[higherPointer];

        if (diff === 0) {
            return [arr[lowerPointer], arr[higherPointer]];
        } else if (diff < 0) {
            lowerPointer++;
        } else if (diff > 0) {
            higherPointer--;
        }
    }

    return undefined;
}
