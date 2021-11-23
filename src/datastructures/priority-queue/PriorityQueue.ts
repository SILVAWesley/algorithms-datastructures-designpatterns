import { PriorityQueueNode } from "./PriorityQueueNode";
import { IPriorityQueue, IPriorityQueueNode } from "./types";

export class PriorityQueue<T> implements IPriorityQueue<T> {
    nodes: IPriorityQueueNode<T>[];

    constructor() {
        this.nodes = [];
    }

    dequeue(): IPriorityQueueNode<T> | undefined {
        if (this.nodes.length === 0) {
            return undefined;
        }

        this.swap(0, this.nodes.length - 1);
        const removedValue = this.nodes.pop();

        // Sink down
        let currentIndex = 0;
        let current = this.nodes[currentIndex];
        let childrenIndexes = this.getIndexOfChildren(0);
        let children = this.getChildren(0);

        while (children.left || children.right) {
            let indexToSwap;

            // The node has 2 children
            if (
                children.left &&
                children.right &&
                (children.left.priority < current.priority ||
                    children.right.priority < current.priority)
            ) {
                indexToSwap =
                    children.left <= children.right
                        ? childrenIndexes.left
                        : childrenIndexes.right;
                // The node has only left child
            } else if (
                children.left &&
                children.left.priority < current.priority
            ) {
                indexToSwap = childrenIndexes.left;
            } else if (
                children.right &&
                children.right.priority < current.priority
            ) {
                indexToSwap = childrenIndexes.right;
            } else {
                return removedValue;
            }

            this.swap(indexToSwap, currentIndex);
            currentIndex = indexToSwap;
            current = this.nodes[currentIndex];
            childrenIndexes = this.getIndexOfChildren(currentIndex);
            children = this.getChildren(currentIndex);
        }

        return removedValue;
    }

    enqueue(priority: number, value: T): IPriorityQueue<T> {
        const newNode = new PriorityQueueNode(priority, value);
        this.nodes.push(newNode);

        let indexOfElement = this.nodes.length - 1;
        let indexOfParent = this.getIndexOfParent(indexOfElement);
        let parent = this.nodes[indexOfParent];

        while (parent?.priority > priority && indexOfParent >= 0) {
            // Bubble up
            this.swap(indexOfParent, indexOfElement);

            indexOfElement = indexOfParent;
            indexOfParent = this.getIndexOfParent(indexOfElement);
            parent = this.nodes[indexOfParent];
        }

        return this;
    }

    getIndexOfParent(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    getChildren(index: number): {
        left: IPriorityQueueNode<T> | undefined;
        right: IPriorityQueueNode<T> | undefined;
    } {
        const childrenIndexes = this.getIndexOfChildren(index);

        let left = undefined;
        let right = undefined;

        if (childrenIndexes.left < this.nodes.length) {
            left = this.nodes[childrenIndexes.left];
        }

        if (childrenIndexes.right < this.nodes.length) {
            right = this.nodes[childrenIndexes.right];
        }

        return { left, right };
    }

    getIndexOfChildren(index: number): { left: number; right: number } {
        return { left: 2 * index + 1, right: 2 * index + 2 };
    }

    swap(x: number, y: number): void {
        const temp = this.nodes[x];
        this.nodes[x] = this.nodes[y];
        this.nodes[y] = temp;
    }

    toString(): string {
        let result = "[";

        for (let i = 0; i < this.nodes.length - 1; i++) {
            result += this.nodes[i].value + ", ";
        }

        if (this.nodes.length > 0) {
            result += this.nodes[this.nodes.length - 1].value;
        }

        result += "]";

        return result;
    }
}
