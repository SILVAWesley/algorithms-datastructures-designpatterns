import { isPalindrome } from "./palindrome";
import { SinglyLinkedList } from "../../datastructures";

describe("palindrome", () => {
    test("palindrome | empty list", () => {
        const list = new SinglyLinkedList<number>();

        expect(isPalindrome(list)).toBeTruthy();
    });

    test("palindrome | one element", () => {
        const list = new SinglyLinkedList<number>();

        expect(isPalindrome(list)).toBeTruthy();
    });

    test("palindrome | many elements", () => {
        const list1 = new SinglyLinkedList<string>();

        list1.unshift("a");
        list1.unshift("r");
        list1.unshift("a");
        list1.unshift("r");
        list1.unshift("a");

        expect(isPalindrome(list1)).toBeTruthy();

        const list2 = new SinglyLinkedList<string>();

        list2.unshift("s");
        list2.unshift("k");
        list2.unshift("y");

        expect(isPalindrome(list2)).toBeFalsy();
    });
});
