/**
 * Write a recursive function called capitalizeWords.
 * Given an array of words, return a new array containing
 * each word capitalized.
 */
export function capitalizeWords(array: string[]): string[] {
    if (array.length === 0) {
        return [];
    }

    const currentWord = array[0].toUpperCase();

    const newArray = [currentWord].concat(capitalizeWords(array.splice(1)));

    return newArray;
}
