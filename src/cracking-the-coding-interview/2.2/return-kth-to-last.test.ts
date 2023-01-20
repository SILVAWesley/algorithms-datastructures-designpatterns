import { returnKthToLastRecursive as returnKthToLast } from "./return-kth-to-last";
import { SinglyLinkedList } from "../../datastructures";

describe("return-kth-to-last", () => {
    test("return-kth-to-last | no elements", () => {
        const list = new SinglyLinkedList<number>();

        expect(list.toString()).toBe("[]");

        expect(returnKthToLast(list, 0)).toBeNull();
    });

    test("return-kth-to-last | one element", () => {
        const list = new SinglyLinkedList<number>();

        list.push(1);

        expect(list.toString()).toBe("[1]");

        expect(returnKthToLast(list, 0)).toBe(1);
    });

    test("return-kth-to-last | many elements", () => {
        const list = new SinglyLinkedList<number>();

        list.push(1);
        list.push(2);
        list.push(5);
        list.push(-1);
        list.push(10);

        expect(list.toString()).toBe("[1, 2, 5, -1, 10]");

        expect(returnKthToLast(list, 0)).toBe(10);
        expect(returnKthToLast(list, 1)).toBe(-1);
        expect(returnKthToLast(list, 2)).toBe(5);
        expect(returnKthToLast(list, 3)).toBe(2);
        expect(returnKthToLast(list, 4)).toBe(1);
        expect(returnKthToLast(list, 5)).toBe(null);
    });
});
