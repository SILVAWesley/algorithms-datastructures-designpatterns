import { TQueueNode } from "./TQueueNode";

export interface IQueue<T> {
    head: TQueueNode<T>;
    tail: TQueueNode<T>;
    length: number;
    peek(): T | undefined;
    poll(): T | undefined;
    push(value: T): number;
    toString(): string;
}
