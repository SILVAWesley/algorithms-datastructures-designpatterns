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

        const isReverse = index >= Math.floor(this.length / 2);

        let currentNode = isReverse ? this.tail : this.head;
        let currentIndex = isReverse ? this.length - 1 : 0;

        while (currentNode) {
            if (currentIndex === index) {
                return currentNode;
            }

            if (isReverse) {
                currentIndex--;
                currentNode = currentNode.previous;
            } else {
                currentIndex++;
                currentNode = currentNode.next;
            }
        }

        return null;
    }

    set(index: number, newValue: T): boolean {
        const node = this.get(index);

        if (!node) {
            return false;
        }

        node.value = newValue;
        return true;
    }

    insert(index: number, value: T): boolean {
        if (index < 0 || index > this.length) return false;

        if (index === 0) {
            this.unshift(value);
            return true;
        }

        if (index === this.length) {
            this.push(value);
            return true;
        }

        const prevNode = this.get(index - 1);
        const currentNode = prevNode?.next;

        if (prevNode && currentNode) {
            const newNode = new DoublyLinkedListNode(
                currentNode,
                prevNode,
                value,
            );
            prevNode.next = newNode;
            currentNode.previous = newNode;
            this.length++;
            return true;
        }

        return false;
    }

    remove(index: number): T | undefined {
        if (index < 0 || index >= this.length) return undefined;

        if (index === 0) {
            return this.shift();
        }

        if (index === this.length - 1) {
            return this.pop();
        }

        const nodeToRemove = this.get(index);
        const prevNode = nodeToRemove?.previous;
        const nextNode = nodeToRemove?.next;

        if (nodeToRemove && prevNode && nextNode) {
            nodeToRemove.next = null;
            nodeToRemove.previous = null;

            prevNode.next = nextNode;
            nextNode.previous = prevNode;

            this.length--;

            return nodeToRemove.value;
        }

        return undefined;
    }

    reverse(): IDoublyLinkedList<T> {
        const oldHead = this.head;
        this.head = this.tail;
        this.tail = oldHead;

        let currentNode = this.head;

        while (currentNode) {
            const oldNext = currentNode.next;
            currentNode.next = currentNode.previous;
            currentNode.previous = oldNext;

            currentNode = currentNode.next;
        }

        return this;
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
