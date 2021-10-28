import { ISinglyLinkedListNode, TSinglyLinkedListNode } from "./types";

export class SinglyLinkedListNode<T> implements ISinglyLinkedListNode<T> {
    next: TSinglyLinkedListNode<T>;
    value: T;

    constructor(next: TSinglyLinkedListNode<T>, value: T) {
        this.next = next;
        this.value = value;
    }
}
