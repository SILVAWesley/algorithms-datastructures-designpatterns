import { IDoublyLinkedListNode, TDoublyLinkedListNode } from "./types";

export class DoublyLinkedListNode<T> implements IDoublyLinkedListNode<T> {
    next: TDoublyLinkedListNode<T>;
    previous: TDoublyLinkedListNode<T>;
    value: T;

    constructor(
        next: TDoublyLinkedListNode<T>,
        previous: TDoublyLinkedListNode<T>,
        value: T,
    ) {
        this.next = next;
        this.previous = previous;
        this.value = value;
    }
}
