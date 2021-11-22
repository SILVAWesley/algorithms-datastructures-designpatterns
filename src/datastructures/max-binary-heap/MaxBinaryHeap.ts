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

        // Sink down
        let currentIndex = 0;
        let current = this.values[currentIndex];
        let childrenIndexes = this.getIndexOfChildren(0);
        let children = this.getChildren(0);

        while (children.left || children.right) {
            let indexToSwap;

            // The node has 2 children
            if (
                children.left &&
                children.right &&
                (children.left > current || children.right > current)
            ) {
                indexToSwap =
                    children.left >= children.right
                        ? childrenIndexes.left
                        : childrenIndexes.right;
                // The node has only left child
            } else if (children.left && children.left > current) {
                indexToSwap = childrenIndexes.left;
            } else if (children.right && children.right > current) {
                indexToSwap = childrenIndexes.right;
            } else {
                return removedValue;
            }

            this.swap(indexToSwap, currentIndex);
            currentIndex = indexToSwap;
            current = this.values[currentIndex];
            childrenIndexes = this.getIndexOfChildren(currentIndex);
            children = this.getChildren(currentIndex);
        }

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

    getChildren(index: number): { left: T | undefined; right: T | undefined } {
        const childrenIndexes = this.getIndexOfChildren(index);

        let left = undefined;
        let right = undefined;

        if (childrenIndexes.left < this.values.length) {
            left = this.values[childrenIndexes.left];
        }

        if (childrenIndexes.right < this.values.length) {
            right = this.values[childrenIndexes.right];
        }

        return { left, right };
    }

    getIndexOfChildren(index: number): { left: number; right: number } {
        return { left: 2 * index + 1, right: 2 * index + 2 };
    }

    swap(x: number, y: number): void {
        const temp = this.values[x];
        this.values[x] = this.values[y];
        this.values[y] = temp;
    }
}
