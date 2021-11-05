type TRecursiveArray = Array<TRecursiveArray | number>;

/**
 * Write a function called flatten which accepts an array
 * of arrays and returns a new array with all values
 * flattened.
 */
export function flatten(array: TRecursiveArray): TRecursiveArray | number[] {
    if (array.length === 1 && typeof array[0] === "number") {
        return array;
    } else if (array.length === 1) {
        return flatten(array[0] as TRecursiveArray);
    } else if (array.length === 0) {
        return [];
    }

    const currentElement = array[0];

    if (typeof currentElement !== "number") {
        return flatten(currentElement).concat(
            flatten(array.slice(1)) as number[],
        );
    }

    const flattenedArray = [currentElement].concat(
        flatten(array.slice(1)) as number[],
    );

    return flattenedArray;
}
