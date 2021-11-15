import { BinarySearchTree } from "./BinarySearchTree";

describe("BinarySearchTree | Simple | insert | 01", () => {
    test("empty tree", () => {
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

describe("BinarySearchTree | Simple | remove | 01", () => {
    test("empty tree", () => {
        const bst = new BinarySearchTree();

        expect(bst.root).toBe(null);
    });

    test("Remove leaf", () => {
        const bst = new BinarySearchTree();
        bst.insert(5);
        bst.insert(1);
        bst.insert(10);
        bst.insert(15);
        bst.insert(6);
        bst.insert(3);
        bst.insert(-1);

        bst.remove(6);

        expect(bst.root?.value).toBe(5);
        expect(bst.root?.left?.value).toBe(1);
        expect(bst.root?.right?.value).toBe(10);
        expect(bst.root?.left?.left?.value).toBe(-1);
        expect(bst.root?.left?.right?.value).toBe(3);
        expect(bst.root?.right?.left).toBe(null);
        expect(bst.root?.right?.right?.value).toBe(15);

        bst.remove(3);

        expect(bst.root?.value).toBe(5);
        expect(bst.root?.left?.value).toBe(1);
        expect(bst.root?.right?.value).toBe(10);
        expect(bst.root?.left?.left?.value).toBe(-1);
        expect(bst.root?.left?.right).toBe(null);
        expect(bst.root?.right?.left).toBe(null);
        expect(bst.root?.right?.right?.value).toBe(15);

        bst.remove(-1);

        expect(bst.root?.value).toBe(5);
        expect(bst.root?.left?.value).toBe(1);
        expect(bst.root?.right?.value).toBe(10);
        expect(bst.root?.left?.left).toBe(null);
        expect(bst.root?.left?.right).toBe(null);
        expect(bst.root?.right?.left).toBe(null);
        expect(bst.root?.right?.right?.value).toBe(15);

        bst.remove(15);

        expect(bst.root?.value).toBe(5);
        expect(bst.root?.left?.value).toBe(1);
        expect(bst.root?.right?.value).toBe(10);
        expect(bst.root?.left?.left).toBe(null);
        expect(bst.root?.left?.right).toBe(null);
        expect(bst.root?.right?.left).toBe(null);
        expect(bst.root?.right?.right).toBe(null);

        bst.remove(1);

        expect(bst.root?.value).toBe(5);
        expect(bst.root?.left).toBe(null);
        expect(bst.root?.right?.value).toBe(10);
        expect(bst.root?.left?.left).toBe(undefined);
        expect(bst.root?.left?.right).toBe(undefined);
        expect(bst.root?.right?.left).toBe(null);
        expect(bst.root?.right?.right).toBe(null);

        bst.remove(10);

        expect(bst.root?.value).toBe(5);
        expect(bst.root?.left).toBe(null);
        expect(bst.root?.right).toBe(null);
        expect(bst.root?.left?.left).toBe(undefined);
        expect(bst.root?.left?.right).toBe(undefined);
        expect(bst.root?.right?.left).toBe(undefined);
        expect(bst.root?.right?.right).toBe(undefined);

        bst.remove(5);

        expect(bst.root).toBe(null);
        expect(bst.root?.left).toBe(undefined);
        expect(bst.root?.right).toBe(undefined);
        expect(bst.root?.left?.left).toBe(undefined);
        expect(bst.root?.left?.right).toBe(undefined);
        expect(bst.root?.right?.left).toBe(undefined);
        expect(bst.root?.right?.right).toBe(undefined);
    });

    test("Remove 2 children", () => {
        const bst = new BinarySearchTree();
        bst.insert(5);
        bst.insert(1);
        bst.insert(10);
        bst.insert(15);
        bst.insert(6);
        bst.insert(3);
        bst.insert(-1);

        bst.remove(10);

        /*expect(bst.root?.value).toBe(5);
        expect(bst.root?.left?.value).toBe(1);
        expect(bst.root?.right?.value).toBe(6);
        expect(bst.root?.left?.left?.value).toBe(-1);
        expect(bst.root?.left?.right?.value).toBe(3);
        expect(bst.root?.right?.left).toBe(null);
        expect(bst.root?.right?.right?.value).toBe(15);*/
    });
});

describe("BinarySearchTree | Simple | inorder | 01", () => {
    test("many elements", () => {
        const bst = new BinarySearchTree();

        bst.insert(5);
        bst.insert(1);
        bst.insert(10);
        bst.insert(15);
        bst.insert(6);
        bst.insert(3);
        bst.insert(-1);

        expect(bst.inorder()).toStrictEqual([-1, 1, 3, 5, 6, 10, 15]);
    });
});

describe("BinarySearchTree | Simple | preorder | 01", () => {
    test("many elements", () => {
        const bst = new BinarySearchTree();

        bst.insert(5);
        bst.insert(1);
        bst.insert(10);
        bst.insert(15);
        bst.insert(6);
        bst.insert(3);
        bst.insert(-1);

        expect(bst.preorder()).toStrictEqual([5, 1, -1, 3, 10, 6, 15]);
    });
});

describe("BinarySearchTree | Simple | postorder | 01", () => {
    test("many elements", () => {
        const bst = new BinarySearchTree();

        bst.insert(5);
        bst.insert(1);
        bst.insert(10);
        bst.insert(15);
        bst.insert(6);
        bst.insert(3);
        bst.insert(-1);

        expect(bst.postorder()).toStrictEqual([-1, 3, 1, 6, 15, 10, 5]);
    });
});
