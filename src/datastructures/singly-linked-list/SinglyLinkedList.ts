import { ISinglyLinkedList, TSinglyLinkedListNode } from "./types";
import { SinglyLinkedListNode } from "./SinglyLinkedListNode";

export class SinglyLinkedList<T> implements ISinglyLinkedList<T> {
    head: TSinglyLinkedListNode<T>;
    length: number;
    tail: TSinglyLinkedListNode<T>;

    constructor() {
        this.head = null;
        this.length = 0;
        this.tail = null;
    }

    push(value: T) {
        const newNode = new SinglyLinkedListNode(null, value);

        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;

        let currentNode = this.head;

        while (currentNode?.next?.next) {
            currentNode = currentNode?.next;
        }

        currentNode.next = null;

        const removedValue = this.tail?.value;
        this.tail = currentNode;

        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return removedValue;
    }

    shift() {
        if (this.head === null) return undefined;

        const returnValue = this.head.value;
        this.head = this.head.next;
        this.length--;

        if (this.head === null) {
            this.tail = null;
        }

        return returnValue;
    }

    unshift(value: T) {
        const newNode = new SinglyLinkedListNode(this.head, value);

        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    get(index: number) {
        if (index < 0 || index >= this.length) return null;

        let currentNode = this.head;
        let currentIndex = 0;

        while (currentNode && currentIndex <= index) {
            if (currentIndex === index) {
                return currentNode;
            }

            currentIndex++;
            currentNode = currentNode.next;
        }

        return null;
    }

    set(index: number, newValue: T) {
        const node = this.get(index);

        if (!node) {
            return false;
        }

        node.value = newValue;

        return true;
    }

    insert(index: number, value: T) {
        if (index < 0 || index > this.length) return false;

        if (index === this.length) {
            this.push(value);
            return true;
        } else {
            let prevNode = null;
            let currentNode = this.head;
            let currentIndex = 0;

            while (currentNode) {
                if (currentIndex === index) {
                    const newNode = new SinglyLinkedListNode(
                        currentNode,
                        value,
                    );

                    if (prevNode) {
                        prevNode.next = newNode;
                    } else {
                        this.head = newNode;
                    }

                    this.length++;
                    return true;
                }

                currentIndex++;
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
        }
        return false;
    }

    remove(index: number) {
        if (index < 0 || index >= this.length) return undefined;

        if (index === 0) {
            return this.shift();
        }

        if (index === this.length - 1) {
            return this.pop();
        }

        const prevNode = this.get(index - 1);

        if (!prevNode) {
            return undefined;
        }

        const returnValue = prevNode.next?.value;
        prevNode.next = prevNode.next?.next || null;
        this.length--;

        return returnValue;
    }

    reverse() {
        const tempHead = this.head;
        this.head = this.tail;
        this.tail = tempHead;

        let currentNode = this.tail;
        let nextNode = this.tail?.next || null;
        let prevNode = null;

        while (currentNode) {
            // Reverse current
            currentNode.next = prevNode;

            // Go to next
            prevNode = currentNode;
            currentNode = nextNode;
            nextNode = currentNode?.next || null;
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
}
