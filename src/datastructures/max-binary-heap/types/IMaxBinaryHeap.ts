export interface IMaxBinaryHeap<T> {
    values: T[];
    extractMax(): T | undefined;
    insert(value: T): IMaxBinaryHeap<T>;
}
