import { TreeNode, TTreeNode } from "../../..";

export function runBfs<T>(tree: TreeNode<T>): T[] {
    const toVisit: TTreeNode<T>[] = [];
    toVisit.push(tree);

    const visited = [];

    while (toVisit.length > 0) {
        const currentNode = toVisit.shift();

        if (currentNode) {
            visited.push(currentNode.value);

            for (const child of currentNode.children) {
                toVisit.push(child);
            }
        }
    }

    return visited;
}
