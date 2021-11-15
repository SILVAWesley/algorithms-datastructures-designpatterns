import { TTreeNode } from "../../..";

export function runDfs<T>(tree: TTreeNode<T>): T[] {
    if (!tree) {
        return [];
    }

    let result: T[] = [];

    result.push(tree.value);

    for (const child of tree.children) {
        if (child?.value) {
            result = result.concat(runDfs(child));
        }
    }

    return result;
}
