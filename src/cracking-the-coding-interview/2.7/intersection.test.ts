import { intersection } from "./intersection";
import { SinglyLinkedList, SinglyLinkedListNode } from "../../datastructures";

describe("intersection", () => {
    test("intersection | no element", () => {
        const list1 = new SinglyLinkedList();
        const list2 = new SinglyLinkedList();

        expect(intersection(list1, list2)).toBeUndefined();
    });

    test("intersection | one element - no intersection", () => {
        const list1 = new SinglyLinkedList();

        list1.push(1);

        const list2 = new SinglyLinkedList();

        list2.push(1);

        expect(intersection(list1, list2)).toBeUndefined();
    });

    test("intersection | one element - intersection", () => {
        const list1 = new SinglyLinkedList();

        list1.push(1);

        const list2 = new SinglyLinkedList();

        list2.head = list1.head;
        list2.tail = list1.tail;
        list2.length = list1.length;

        expect(intersection(list1, list2)).toBe(list1.head);
    });

    test("intersection | same length - no intersection", () => {
        const list1 = new SinglyLinkedList();

        list1.push(1);
        list1.push(2);

        const list2 = new SinglyLinkedList();

        list2.push(1);
        list2.push(3);

        expect(intersection(list1, list2)).toBeUndefined();
    });

    test("intersection | same length - intersection", () => {
        const list1 = new SinglyLinkedList();

        list1.push(6);
        list1.push(10);
        list1.push(2);
        list1.push(15);

        const list2 = new SinglyLinkedList();

        list2.push(8);
        list2.push(7);

        const node7 = list2.get(1) as SinglyLinkedListNode<unknown>;

        node7.next = list1.get(2);
        list2.tail = list1.tail;
        list2.length = list1.length;

        expect(intersection(list1, list2)).toBe(list1.get(2));
    });

    test("intersection | different length - no intersection", () => {
        const list1 = new SinglyLinkedList();

        list1.push(1);
        list1.push(2);
        list1.push(3);
        list1.push(5);

        const list2 = new SinglyLinkedList();

        list2.push(1);
        list2.push(3);

        expect(intersection(list1, list2)).toBeUndefined();
    });

    test("intersection | different length - intersection", () => {
        const list1 = new SinglyLinkedList();

        list1.push(6);
        list1.push(10);
        list1.push(2);
        list1.push(15);

        const list2 = new SinglyLinkedList();

        list2.push(8);
        list2.push(7);
        list2.push(8);
        list2.push(12);

        const node12 = list2.get(3) as SinglyLinkedListNode<unknown>;

        node12.next = list1.get(2);
        list2.tail = list1.tail;
        list2.length = list2.length + 2;

        expect(intersection(list1, list2)).toBe(list1.get(2));
    });
});
