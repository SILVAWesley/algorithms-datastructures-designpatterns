import { TDoublyLinkedListNode } from "./TDoublyLinkedListNode";

export interface IDoublyLinkedList<T> {
    head: TDoublyLinkedListNode<T>;
    length: number;
    tail: TDoublyLinkedListNode<T>;
    push(value: T): IDoublyLinkedList<T>;
    pop(): T | undefined;
    shift(): T | undefined;
    unshift(value: T): IDoublyLinkedList<T>;
    get(index: number): TDoublyLinkedListNode<T>;
    set(index: number, newValue: T): boolean;
    insert(index: number, value: T): boolean;
    remove(index: number): T | undefined;
    reverse(): IDoublyLinkedList<T>;
    toString(): string;
    toReverseString(): string;
}
