import { BinarySearchTreeNode } from "./BinarySearchTreeNode";
import { IBinarySearchTree, TBinarySearchTreeNode } from "./types";

export class BinarySearchTree<T> implements IBinarySearchTree<T> {
    root: TBinarySearchTreeNode<T>;

    constructor() {
        this.root = null;
    }

    insert(value: T): TBinarySearchTreeNode<T> {
        const newNode = new BinarySearchTreeNode(null, null, value);

        if (!this.root) {
            this.root = newNode;
            return this.root;
        }

        let currentNode = this.root;

        while (currentNode) {
            if (value >= currentNode.value) {
                if (currentNode.right) {
                    currentNode = currentNode.right;
                } else {
                    currentNode.right = newNode;
                    return this.root;
                }
            } else {
                if (currentNode.left) {
                    currentNode = currentNode.left;
                } else {
                    currentNode.left = newNode;
                    return this.root;
                }
            }
        }

        return this.root;
    }

    isEmpty(): boolean {
        return this.root === null;
    }

    remove(value: T): TBinarySearchTreeNode<T> | undefined {
        throw new Error("To be implemented");
        /*let currentNode = this.root;

        while (currentNode) {
            if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                // Case 1: The element has 2 children
                if (currentNode.left && currentNode.right) {
                    // Case 2: Only one child
                } else if (currentNode.left || currentNode.right) {
                    if (currentNode.left) {
                        const tempNode = currentNode.left;
                        currentNode.value = tempNode.value;
                        currentNode.left = tempNode.left;
                        currentNode.right = tempNode.right;
                    } else if (currentNode.right) {
                        const tempNode = currentNode.right;
                        currentNode.value = tempNode.value;
                        currentNode.left = tempNode.left;
                        currentNode.right = tempNode.right;
                    }
                    //Case 3 : No children
                } else {
                    currentNode.value = null;
                }
            }
        }*/
    }

    search(value: T): TBinarySearchTreeNode<T> | undefined {
        let currentNode = this.root;

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            } else if (currentNode.value < value) {
                currentNode = currentNode.right;
            } else {
                currentNode = currentNode.left;
            }
        }

        return undefined;
    }
}
