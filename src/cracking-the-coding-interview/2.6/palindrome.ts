import { SinglyLinkedList } from "../../datastructures";

/**
 * Implement a function to check if a linked list is a palindrome.
 *
 * Time: O(N), Space: O(N), where N is the length of the list;
 */
export function isPalindrome<T>(list: SinglyLinkedList<T>) {
    // O(N)
    const reversed = reverse(list);

    let currentList = list.head;
    let currentReversed = reversed.head;

    // O(N)
    while (currentList && currentReversed) {
        if (currentList.value !== currentReversed.value) {
            return false;
        }

        currentList = currentList.next;
        currentReversed = currentReversed.next;
    }

    return true;
}

function reverse<T>(list: SinglyLinkedList<T>) {
    const result = new SinglyLinkedList<T>();

    let current = list.head;

    while (current) {
        result.unshift(current.value);
        current = current.next;
    }

    return result;
}
