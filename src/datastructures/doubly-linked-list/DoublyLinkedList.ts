import { timeStamp } from "console";
import { DoublyLinkedListNode } from ".";
import { IDoublyLinkedList, TDoublyLinkedListNode } from "./types";

export class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
    head: TDoublyLinkedListNode<T>;
    length: number;
    tail: TDoublyLinkedListNode<T>;

    constructor() {
        this.head = null;
        this.length = 0;
        this.tail = null;
    }

    push(value: T): IDoublyLinkedList<T> {
        const newNode = new DoublyLinkedListNode(null, null, value);

        if (this.tail === null) {
            this.tail = newNode;
            this.head = this.tail;
        } else {
            newNode.previous = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    pop(): T | undefined {
        if (this.head === null || this.tail === null) return undefined;

        if (this.length === 1) {
            const returnValue = this.head.value;

            this.head = null;
            this.tail = null;

            this.length--;

            return returnValue;
        }

        const returnValue = this.tail?.value;
        const newTail = this.tail?.previous;
        this.tail.previous = null;

        if (newTail) {
            newTail.next = null;
            this.tail = newTail;
        }

        this.length--;

        return returnValue;
    }

    shift(): T | undefined {
        if (this.head === null || this.tail === null) return undefined;

        const returnValue = this.head.value;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            const oldHead = this.head;
            this.head = oldHead.next;
            oldHead.next = null;

            if (this.head) {
                this.head.previous = null;
            }
        }

        this.length--;

        return returnValue;
    }

    unshift(value: T): IDoublyLinkedList<T> {
        const newNode = new DoublyLinkedListNode(null, null, value);

        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            const oldHead = this.head;
            this.head = newNode;
            this.head.next = oldHead;
            oldHead.previous = this.head;
        }

        this.length++;

        return this;
    }

    get(index: number): TDoublyLinkedListNode<T> {
        if (index < 0 || index >= this.length) return null;

        let currentNode = this.head;
        let currentIndex = 0;

        while (currentNode) {
            if (currentIndex === index) {
                return currentNode;
            }

            currentIndex++;
            currentNode = currentNode.next;
        }

        return null;
    }

    set(index: number, newValue: T): boolean {
        throw new Error("Method not implemented.");
    }

    insert(index: number, value: T): boolean {
        throw new Error("Method not implemented.");
    }

    remove(index: number): T | undefined {
        throw new Error("Method not implemented.");
    }

    reverse(): IDoublyLinkedList<T> {
        throw new Error("Method not implemented.");
    }

    toString(): string {
        let result = "[";

        let currentNode = this.head;

        while (currentNode?.next) {
            result += currentNode.value + ", ";
            currentNode = currentNode.next;
        }

        if (currentNode) {
            result += currentNode?.value;
        }

        result += "]";

        return result;
    }

    toReverseString(): string {
        let result = "[";

        let currentNode = this.tail;

        while (currentNode?.previous) {
            result += currentNode.value + ", ";
            currentNode = currentNode.previous;
        }

        if (currentNode) {
            result += currentNode?.value;
        }

        result += "]";

        return result;
    }
}
