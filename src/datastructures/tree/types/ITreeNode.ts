import { TTreeNode } from "./TTreeNode";

export interface ITreeNode<T> {
    children: TTreeNode<T>[];
    parent: TTreeNode<T>;
    value: T;
    addChild(value: T): ITreeNode<T>;
    removeChild(value: T): ITreeNode<T> | undefined;
}
