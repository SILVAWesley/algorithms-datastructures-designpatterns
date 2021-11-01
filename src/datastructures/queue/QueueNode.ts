import { IQueueNode, TQueueNode } from "./types";

export class QueueNode<T> implements IQueueNode<T> {
    next: TQueueNode<T>;
    previous: TQueueNode<T>;
    value: T;

    constructor(next: TQueueNode<T>, previous: TQueueNode<T>, value: T) {
        this.next = next;
        this.previous = previous;
        this.value = value;
    }
}
