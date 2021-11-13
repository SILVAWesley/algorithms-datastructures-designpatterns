import { BinarySearchTreeNode } from "./BinarySearchTreeNode";

describe("BinarySearchTreeNode | Simple | 01", () => {
    test("numeric value | empty next", () => {
        const bstNode = new BinarySearchTreeNode(null, null, 10);

        expect(bstNode.left).toBe(null);
        expect(bstNode.right).toBe(null);
        expect(bstNode.value).toBe(10);
    });

    test("string value | empty next", () => {
        const bstNode = new BinarySearchTreeNode(null, null, "testing");

        expect(bstNode.left).toBe(null);
        expect(bstNode.right).toBe(null);
        expect(bstNode.value).toBe("testing");
    });

    test("object value | one next", () => {
        const bstNodeLeftChild = new BinarySearchTreeNode(null, null, {
            content: "Hello",
            num: 0,
        });
        const bstNodeParent = new BinarySearchTreeNode(bstNodeLeftChild, null, {
            content: "World",
            num: 1,
        });

        expect(bstNodeParent.left).toBe(bstNodeLeftChild);
        expect(bstNodeParent.value).toMatchObject({ content: "World", num: 1 });

        expect(bstNodeLeftChild.right).toBe(null);
        expect(bstNodeLeftChild.value).toStrictEqual({
            content: "Hello",
            num: 0,
        });
    });

    test("null value | null next", () => {
        const bstNode = new BinarySearchTreeNode(null, null, null);

        expect(bstNode.left).toBe(null);
        expect(bstNode.right).toBe(null);
        expect(bstNode.value).toBe(null);
    });
});
