/**
 * Write a recursive function called capitalizeFirst.
 * Given an array of strings, capitalize the first
 * letter of each string in the array.
 */
export function capitalizeFirst(array: string[]) {
    capitalizeFirstHelper(array, 0);
    return array;
}

function capitalizeFirstHelper(array: string[], index: number) {
    if (index >= array.length) {
        return;
    }

    array[index] = array[index][0].toUpperCase() + array[index].substr(1);
    capitalizeFirstHelper(array, index + 1);
}
