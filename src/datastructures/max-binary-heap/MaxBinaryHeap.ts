import { getHeapCodeStatistics } from "v8";
import { IMaxBinaryHeap } from "./types";

export class MaxBinaryHeap<T> implements IMaxBinaryHeap<T> {
    values: T[];

    constructor() {
        this.values = [];
    }

    extractMax(): T | undefined {
        if (this.values.length === 0) {
            return undefined;
        }

        this.swap(0, this.values.length - 1);
        const removedValue = this.values.pop();

        let childrenIndexes = this.getIndexOfChildren(0);

        return removedValue;
    }

    insert(value: T): IMaxBinaryHeap<T> {
        this.values.push(value);

        let indexOfElement = this.values.length - 1;
        let indexOfParent = this.getIndexOfParent(indexOfElement);
        let parent = this.values[indexOfParent];

        while (parent < value && indexOfParent >= 0) {
            // Bubble up
            this.swap(indexOfParent, indexOfElement);

            indexOfElement = indexOfParent;
            indexOfParent = this.getIndexOfParent(indexOfElement);
            parent = this.values[indexOfParent];
        }

        return this;
    }

    getIndexOfParent(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    getIndexOfChildren(index: number): number[] {
        return [2 * index + 1, 2 * index + 2];
    }

    swap(x: number, y: number): void {
        const temp = this.values[x];
        this.values[x] = this.values[y];
        this.values[y] = temp;
    }
}
