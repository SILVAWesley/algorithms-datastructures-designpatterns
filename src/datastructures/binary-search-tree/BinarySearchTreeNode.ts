import { IBinarySearchTreeNode, TBinarySearchTreeNode } from "./types";

export class BinarySearchTreeNode<T> implements IBinarySearchTreeNode<T> {
    left: TBinarySearchTreeNode<T>;
    right: TBinarySearchTreeNode<T>;
    value: T;

    constructor(
        left: TBinarySearchTreeNode<T>,
        right: TBinarySearchTreeNode<T>,
        value: T,
    ) {
        this.left = left;
        this.right = right;
        this.value = value;
    }
}
