import { sumListsForward, sumLists } from "./sum-lists";
import { SinglyLinkedList } from "../../datastructures";

describe("sumLists", () => {
    test("sumLists | question example", () => {
        const num1 = new SinglyLinkedList<number>();
        const num2 = new SinglyLinkedList<number>();

        num1.push(7);
        num1.push(1);
        num1.push(6);

        num2.push(5);
        num2.push(9);
        num2.push(2);

        const result = sumLists(num1, num2);

        expect(result.toString()).toBe("[2, 1, 9]");
    });

    test("sumLists | overflow in the end", () => {
        const num1 = new SinglyLinkedList<number>();
        const num2 = new SinglyLinkedList<number>();

        num1.push(9);
        num1.push(8);
        num1.push(7);

        num2.push(8);
        num2.push(2);
        num2.push(7);

        const result = sumLists(num1, num2);

        expect(result.toString()).toBe("[7, 1, 5, 1]");
    });

    test("sumLists | bigger length on num1", () => {
        const num1 = new SinglyLinkedList<number>();
        const num2 = new SinglyLinkedList<number>();

        num1.push(9);
        num1.push(8);
        num1.push(7);
        num1.push(2);
        num1.push(9);

        num2.push(8);
        num2.push(2);
        num2.push(7);

        const result = sumLists(num1, num2);

        expect(result.toString()).toBe("[7, 1, 5, 3, 9]");
    });

    test("sumLists | bigger length on num2", () => {
        const num1 = new SinglyLinkedList<number>();
        const num2 = new SinglyLinkedList<number>();

        num1.push(8);
        num1.push(2);
        num1.push(7);

        num2.push(9);
        num2.push(8);
        num2.push(7);
        num2.push(2);
        num2.push(9);

        const result = sumLists(num1, num2);

        expect(result.toString()).toBe("[7, 1, 5, 3, 9]");
    });

    test("sumListsForward | question example", () => {
        const num1 = new SinglyLinkedList<number>();
        const num2 = new SinglyLinkedList<number>();

        num1.push(6);
        num1.push(1);
        num1.push(7);

        num2.push(2);
        num2.push(9);
        num2.push(5);

        const result = sumListsForward(num1, num2);

        expect(result.toString()).toBe("[9, 1, 2]");
    });

    test("sumListsForward | overflow in the end", () => {
        const num1 = new SinglyLinkedList<number>();
        const num2 = new SinglyLinkedList<number>();

        num1.push(7);
        num1.push(8);
        num1.push(9);

        num2.push(7);
        num2.push(2);
        num2.push(8);

        const result = sumListsForward(num1, num2);

        expect(result.toString()).toBe("[1, 5, 1, 7]");
    });
});
