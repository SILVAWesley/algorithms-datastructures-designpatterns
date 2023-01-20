import { removeDupsInPlace as removeDups } from "./remove-dups";
import { SinglyLinkedList } from "../../datastructures";

describe("removedups", () => {
    test("removedups | no elements", () => {
        const list = new SinglyLinkedList<number>();

        expect(list.toString()).toBe("[]");

        removeDups(list);

        expect(list.toString()).toBe("[]");
    });

    test("removedups | with one element", () => {
        const list = new SinglyLinkedList<number>();

        list.push(-1);

        expect(list.toString()).toBe("[-1]");

        removeDups(list);

        expect(list.toString()).toBe("[-1]");
    });

    test("removedups | with many elements no duplicates", () => {
        // 01
        const list1 = new SinglyLinkedList<number>();

        list1.push(-1);
        list1.push(100);

        expect(list1.toString()).toBe("[-1, 100]");

        removeDups(list1);

        expect(list1.toString()).toBe("[-1, 100]");

        // 02
        const list2 = new SinglyLinkedList<number>();

        list2.push(5);
        list2.push(-1);
        list2.push(10);
        list2.push(15);

        expect(list2.toString()).toBe("[5, -1, 10, 15]");

        removeDups(list2);

        expect(list2.toString()).toBe("[5, -1, 10, 15]");
    });

    test("removedups | with many elements and duplicates", () => {
        // 01
        const list1 = new SinglyLinkedList<number>();

        list1.push(100);
        list1.push(100);

        expect(list1.toString()).toBe("[100, 100]");

        removeDups(list1);

        expect(list1.toString()).toBe("[100]");

        // 02
        const list2 = new SinglyLinkedList<number>();

        list2.push(5);
        list2.push(-1);
        list2.push(10);
        list2.push(5);

        expect(list2.toString()).toBe("[5, -1, 10, 5]");
        expect(list2.length).toBe(4);

        removeDups(list2);

        expect(list2.toString()).toBe("[5, -1, 10]");
        expect(list2.length).toBe(3);
    });
});
