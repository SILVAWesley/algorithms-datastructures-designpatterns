import { TBinarySearchTreeNode } from "./TBinarySearchTreeNode";

export interface IBinarySearchTree<T> {
    root: TBinarySearchTreeNode<T>;
    insert(value: T): TBinarySearchTreeNode<T>;
    isEmpty(): boolean;
    search(value: T): TBinarySearchTreeNode<T> | undefined;
    remove(value: T): TBinarySearchTreeNode<T> | undefined;
}
