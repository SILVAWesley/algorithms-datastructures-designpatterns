import { IPriorityQueueNode } from "./types/IPriorityQueueNode";

export class PriorityQueueNode<T> implements IPriorityQueueNode<T> {
    priority: number;
    value: T;

    constructor(priority: number, value: T) {
        this.priority = priority;
        this.value = value;
    }
}
