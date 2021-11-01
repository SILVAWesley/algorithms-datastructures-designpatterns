import { TStackNode } from "./TStackNode";

export interface IStack<T> {
    top: TStackNode<T>;
    length: number;
    peek(): T | undefined;
    pop(): T | undefined;
    push(value: T): number;
    toString(): string;
}
