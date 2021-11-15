import { TreeNode } from "../../..";
import { runBfs } from "./bfs";

describe("BFS | Simple | 01", () => {
    test("bfs | only root tree", () => {
        const tree = new TreeNode([], null, 10);
        expect(runBfs(tree)).toStrictEqual([10]);
    });

    test("string value | many nodes tree", () => {
        const tree = new TreeNode([], null, 10);
        const node15 = tree.addChild(15);
        const node25 = tree.addChild(25);
        tree.addChild(20);
        tree.addChild(30);

        node15.addChild(16);
        node25.addChild(5);
        node25.addChild(7);

        expect(runBfs(tree)).toStrictEqual([10, 15, 25, 20, 30, 16, 5, 7]);
    });
});
