import { ITreeNode, TTreeNode } from "./types";

export class TreeNode<T> implements ITreeNode<T> {
    children: TTreeNode<T>[];
    parent: TTreeNode<T>;
    value: T;

    constructor(children: TTreeNode<T>[], parent: TTreeNode<T>, value: T) {
        this.children = children;
        this.parent = parent;
        this.value = value;
    }

    addChild(value: T): ITreeNode<T> {
        const newNode = new TreeNode([], this, value);
        this.children.push(newNode);
        return newNode;
    }

    removeChild(value: T): ITreeNode<T> | undefined {
        for (let i = 0; i < this.children.length; i++) {
            const currentNode = this.children[i];
            if (currentNode?.value === value) {
                currentNode.parent = null;
                this.children.splice(i, 1);
                return currentNode;
            }
        }

        return undefined;
    }
}
