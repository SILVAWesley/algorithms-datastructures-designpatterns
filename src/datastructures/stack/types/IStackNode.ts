import { TStackNode } from "./TStackNode";

export interface IStackNode<T> {
    next: TStackNode<T>;
    previous: TStackNode<T>;
    value: T;
}
