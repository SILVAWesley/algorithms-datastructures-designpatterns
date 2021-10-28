import { TSinglyLinkedListNode } from "./TSinglyLinkedListNode";

export interface ISinglyLinkedListNode<T> {
    next: TSinglyLinkedListNode<T>;
    value: T;
}
