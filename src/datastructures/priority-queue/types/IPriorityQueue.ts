import { IPriorityQueueNode } from "./IPriorityQueueNode";

export interface IPriorityQueue<T> {
    nodes: IPriorityQueueNode<T>[];
    dequeue(): IPriorityQueueNode<T> | undefined;
    enqueue(priority: number, value: T): IPriorityQueue<T>;
    toString(): string;
}
