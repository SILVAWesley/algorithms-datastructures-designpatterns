import { TSinglyLinkedListNode } from "./TSinglyLinkedListNode";

export interface ISinglyLinkedList<T> {
    head: TSinglyLinkedListNode<T>;
    length: number;
    tail: TSinglyLinkedListNode<T>;
    push(value: T): ISinglyLinkedList<T>;
    pop(): T | undefined;
    shift(): T | undefined;
    unshift(value: T): ISinglyLinkedList<T>;
    get(index: number): TSinglyLinkedListNode<T>;
    set(index: number, newValue: T): boolean;
    insert(index: number, value: T): boolean;
    remove(index: number): T | undefined;
    reverse(): ISinglyLinkedList<T>;
    toString(): string;
}
