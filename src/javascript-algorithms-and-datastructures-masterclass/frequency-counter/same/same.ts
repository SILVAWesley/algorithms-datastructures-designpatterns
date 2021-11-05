/**
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the
 * first array has it's corresponding value squared in the
 * second array. The frequency of values must be the same.
 */
export function same(array1: number[], array2: number[]) {
    const frequency1: { [key: number]: number } = {};

    if (array1.length != array2.length) {
        return false;
    }

    for (let i = 0; i < array1.length; i++) {
        if (!frequency1[Math.pow(array1[i], 2)]) {
            frequency1[Math.pow(array1[i], 2)] = 0;
        }

        frequency1[Math.pow(array1[i], 2)] += 1;
    }

    for (let i = 0; i < array2.length; i++) {
        if (!frequency1[array2[i]] || frequency1[array2[i]] <= 0) {
            return false;
        }

        frequency1[array2[i]]--;
    }

    return true;
}
