export function swap<T>(array: T[], k: number, w: number) {
    const temp = array[k];
    array[k] = array[w];
    array[w] = temp;
}
