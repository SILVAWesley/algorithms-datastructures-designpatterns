import { TBinarySearchTreeNode } from "./TBinarySearchTreeNode";

export interface IBinarySearchTreeNode<T> {
    left: TBinarySearchTreeNode<T>;
    right: TBinarySearchTreeNode<T>;
    value: T;
}
