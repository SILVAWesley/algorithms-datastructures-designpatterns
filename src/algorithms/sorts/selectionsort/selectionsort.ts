import { swap } from "../utils";

export function sort<T>(array: T[]): void {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        swap(array, minIndex, i);
    }
}
