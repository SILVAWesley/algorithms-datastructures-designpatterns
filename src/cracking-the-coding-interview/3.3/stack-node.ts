export class StackNode<T> {
    value: T;
    next?: StackNode<T>;

    constructor(value: T, next?: StackNode<T>) {
        this.value = value;
        this.next = next;
    }
}
