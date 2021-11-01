import { TQueueNode } from "./TQueueNode";

export interface IQueueNode<T> {
    next: TQueueNode<T>;
    previous: TQueueNode<T>;
    value: T;
}
