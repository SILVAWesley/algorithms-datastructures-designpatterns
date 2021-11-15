export function sort<T>(array: T[]): void {
    for (let i = 1; i < array.length; i++) {
        const temp = array[i];

        let j = i - 1;

        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = temp;
    }
}
