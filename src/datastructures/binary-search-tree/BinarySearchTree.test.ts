import { BinarySearchTree } from "./BinarySearchTree";

describe("BinarySearchTree | Simple | insert | 01", () => {
    test("empty treet", () => {
        const bst = new BinarySearchTree();

        expect(bst.root).toBe(null);
    });

    test("many inserts", () => {
        const bst = new BinarySearchTree();
        bst.insert(5);

        expect(bst.root?.value).toBe(5);

        bst.insert(1);

        expect(bst.root?.left?.value).toBe(1);
        expect(bst.root?.right).toBe(null);

        bst.insert(10);

        expect(bst.root?.left?.value).toBe(1);
        expect(bst.root?.right?.value).toBe(10);

        bst.insert(15);

        expect(bst.root?.left?.value).toBe(1);
        expect(bst.root?.right?.value).toBe(10);
        expect(bst.root?.right?.right?.value).toBe(15);
        expect(bst.root?.right?.left).toBe(null);

        bst.insert(6);

        expect(bst.root?.left?.value).toBe(1);
        expect(bst.root?.right?.value).toBe(10);
        expect(bst.root?.right?.right?.value).toBe(15);
        expect(bst.root?.right?.left?.value).toBe(6);

        bst.insert(3);
        expect(bst.root?.left?.value).toBe(1);
        expect(bst.root?.right?.value).toBe(10);
        expect(bst.root?.right?.right?.value).toBe(15);
        expect(bst.root?.right?.left?.value).toBe(6);
        expect(bst.root?.left?.right?.value).toBe(3);
        expect(bst.root?.left?.left).toBe(null);

        bst.insert(-1);
        expect(bst.root?.left?.value).toBe(1);
        expect(bst.root?.right?.value).toBe(10);
        expect(bst.root?.right?.right?.value).toBe(15);
        expect(bst.root?.right?.left?.value).toBe(6);
        expect(bst.root?.left?.right?.value).toBe(3);
        expect(bst.root?.left?.left?.value).toBe(-1);
    });
});

describe("BinarySearchTree | Simple | search | 01", () => {
    test("empty", () => {
        const bst = new BinarySearchTree();

        expect(bst.root).toBe(null);
        expect(bst.search(10)).toBe(undefined);
    });

    test("many elements", () => {
        const bst = new BinarySearchTree();

        bst.insert(5);
        bst.insert(1);
        bst.insert(10);
        bst.insert(15);
        bst.insert(6);

        expect(bst.search(1)?.value).toBe(1);
        expect(bst.search(5)?.value).toBe(5);
        expect(bst.search(6)?.value).toBe(6);
        expect(bst.search(10)?.value).toBe(10);
        expect(bst.search(15)?.value).toBe(15);
    });
});
