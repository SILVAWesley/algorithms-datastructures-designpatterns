import { StackNode } from "./StackNode";
import { IStack, TStackNode } from "./types";

export class Stack<T> implements IStack<T> {
    top: TStackNode<T>;
    length: number;

    constructor() {
        this.top = null;
        this.length = 0;
    }

    peek(): T | undefined {
        return this.top?.value;
    }

    pop(): T | undefined {
        if (!this.top) return undefined;

        const returnValue = this.top.value;

        if (this.length === 1) {
            this.top = null;
        } else {
            const oldTop = this.top;
            this.top = this.top.previous;

            if (this.top) {
                this.top.next = null;
            }

            oldTop.previous = null;
        }

        this.length--;

        return returnValue;
    }

    push(value: T): number {
        const newNode = new StackNode(null, null, value);

        if (!this.top) {
            this.top = newNode;
        } else {
            this.top.next = newNode;
            newNode.previous = this.top;
            this.top = newNode;
        }

        this.length++;

        return this.length;
    }

    toString(): string {
        let result = "[";

        let currentNode = this.top;

        while (currentNode?.previous) {
            result += currentNode.value + ", ";
            currentNode = currentNode.previous;
        }

        if (currentNode) {
            result += currentNode.value;
        }

        result += "]";

        return result;
    }
}
