/**
 * Write a function called averagePair. Given a sorted
 * array of integers and a target average, determine if
 * there is a pair of values in the array where the average
 * of the pair equals the target average. There may be more
 * than one pair that matches the average target.
 */
export function averagePair(numbers: number[], average: number) {
    let i = 0;
    let j = numbers.length - 1;

    const target = average * 2;

    while (i < j) {
        const pairSum = numbers[i] + numbers[j];

        if (pairSum === target) {
            return true;
        } else if (pairSum > target) {
            j--;
        } else if (pairSum < target) {
            i++;
        }
    }

    return false;
}
