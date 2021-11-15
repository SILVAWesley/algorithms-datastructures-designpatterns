import { TreeNode } from "./TreeNode";

describe("TreeNode | Simple | 01", () => {
    test("numeric value | empty children", () => {
        const tNode = new TreeNode([], null, 10);

        expect(tNode.children).toStrictEqual([]);
        expect(tNode.value).toBe(10);
    });

    test("string value | empty children", () => {
        const tNode = new TreeNode([], null, "testing");

        expect(tNode.children).toStrictEqual([]);
        expect(tNode.value).toBe("testing");
    });

    test("object value | one child", () => {
        const tNode = new TreeNode([], null, { x: 10 });
        const ptNode = new TreeNode([tNode], null, { x: 15 });

        expect(tNode.children).toStrictEqual([]);
        expect(tNode.value).toStrictEqual({ x: 10 });

        expect(ptNode.children).toStrictEqual([tNode]);
        expect(ptNode.value).toStrictEqual({ x: 15 });
    });

    test("number | multiple children", () => {
        const tNode = new TreeNode([], null, 4);
        const tNode2 = new TreeNode([], null, -1);
        const ptNode = new TreeNode([tNode, tNode2], null, 15);

        expect(tNode.children).toStrictEqual([]);
        expect(tNode.value).toBe(4);

        expect(tNode2.children).toStrictEqual([]);
        expect(tNode2.value).toBe(-1);

        expect(ptNode.children).toStrictEqual([tNode, tNode2]);
        expect(ptNode.value).toStrictEqual(15);
    });

    test("number | use interface methods", () => {
        const ptNode = new TreeNode([], null, 15);
        const addedNode = ptNode.addChild(10);

        expect(ptNode.children).toStrictEqual([addedNode]);
        expect(addedNode?.value).toBe(10);
        expect(addedNode?.parent).toStrictEqual(ptNode);

        const removedNode = ptNode.removeChild(10);

        expect(ptNode.children).toStrictEqual([]);
        expect(removedNode?.value).toBe(10);
        expect(removedNode?.parent).toBe(null);
    });
});
