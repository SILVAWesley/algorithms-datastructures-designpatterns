import { TDoublyLinkedListNode } from "./TDoublyLinkedListNode";

export interface IDoublyLinkedListNode<T> {
    next: TDoublyLinkedListNode<T>;
    previous: TDoublyLinkedListNode<T>;
    value: T;
}
