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
        const result = this.innerRemove(this.root, value);
        this.root = result || null;
        return result;
    }

    private innerRemove(node: TBinarySearchTreeNode<T>, value: T) {
        if (!node) {
            return null;
        }

        if (value === node.value) {
            if (!node.left && !node.right) {
                return null;
            }

            if (!node.left) {
                return node.right;
            }

            if (!node.right) {
                return node.left;
            }

            let temp = node.right;

            while (temp.left) {
                temp = temp.left;
            }

            node.value = temp.value;
            node.right = this.innerRemove(node.right, temp.value) || null;
        } else if (value < node.value) {
            node.left = this.innerRemove(node.left, value) || null;
            return node;
        } else {
            node.right = this.innerRemove(node.right, value) || null;
            return node;
        }
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

    inorder(): T[] {
        return this.inorderHelper(this.root, []);
    }

    private inorderHelper(node: TBinarySearchTreeNode<T>, result: T[]): T[] {
        if (!node) {
            return [];
        }

        this.inorderHelper(node.left, result);
        result.push(node.value);
        this.inorderHelper(node.right, result);

        return result;
    }

    preorder(): T[] {
        return this.preorderHelper(this.root, []);
    }

    private preorderHelper(node: TBinarySearchTreeNode<T>, result: T[]): T[] {
        if (!node) {
            return [];
        }

        result.push(node.value);
        this.preorderHelper(node.left, result);
        this.preorderHelper(node.right, result);

        return result;
    }

    postorder(): T[] {
        return this.postorderHelper(this.root, []);
    }

    private postorderHelper(node: TBinarySearchTreeNode<T>, result: T[]): T[] {
        if (!node) {
            return [];
        }

        this.postorderHelper(node.left, result);
        this.postorderHelper(node.right, result);
        result.push(node.value);

        return result;
    }
}
