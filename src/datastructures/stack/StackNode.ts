import { IStackNode, TStackNode } from "./types";

export class StackNode<T> implements IStackNode<T> {
    next: TStackNode<T>;
    previous: TStackNode<T>;
    value: T;

    constructor(next: TStackNode<T>, previous: TStackNode<T>, value: T) {
        this.next = next;
        this.previous = previous;
        this.value = value;
    }
}
