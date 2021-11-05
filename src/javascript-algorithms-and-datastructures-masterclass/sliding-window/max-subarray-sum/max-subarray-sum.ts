/**
 * Write a function called maxSubarraySum which accepts
 * an array of integers and a number called n. The function
 * should calculate the maximum sum of n consecutive elements
 * in the array.
 */
export function maxSubarraySum(arr: number[], elements: number) {
    if (arr.length === 0) {
        return null;
    }

    // First sum
    let sum = 0;

    for (let i = 0; i < elements; i++) {
        sum += arr[i];
    }

    let maxSum = sum;

    for (let i = elements; i < arr.length; i++) {
        sum -= arr[i - elements];
        sum += arr[i];

        if (sum > maxSum) {
            maxSum = sum;
        }
    }

    return maxSum;
}
