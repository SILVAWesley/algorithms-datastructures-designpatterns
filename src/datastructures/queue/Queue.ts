import { QueueNode } from "./QueueNode";
import { IQueue, TQueueNode } from "./types";

export class Queue<T> implements IQueue<T> {
    head: TQueueNode<T>;
    tail: TQueueNode<T>;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    peek(): T | undefined {
        return this.head?.value;
    }

    poll(): T | undefined {
        if (!this.head) return undefined;

        const returnValue = this.head.value;

        const oldHead = this.head;

        this.head = this.head.next;
        oldHead.next = null;

        if (this.head) {
            this.head.previous = null;
        } else {
            this.tail = null;
        }

        this.length--;

        return returnValue;
    }

    push(value: T): number {
        const newNode = new QueueNode(null, null, value);

        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }

        this.length++;

        return this.length;
    }

    toString(): string {
        let result = "[";

        let currentNode = this.head;

        while (currentNode?.next) {
            result += currentNode.value + ", ";
            currentNode = currentNode.next;
        }

        if (currentNode) {
            result += currentNode.value;
        }

        result += "]";

        return result;
    }
}
