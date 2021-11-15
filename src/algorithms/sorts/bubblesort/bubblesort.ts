import { swap } from "../utils";

export function sort<T>(array: T[]): void {
    for (let i = array.length - 1; i > 0; i--) {
        let hasSwaped = false;

        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                hasSwaped = true;
                swap(array, j, j + 1);
            }
        }

        if (!hasSwaped) {
            return;
        }
    }
}
