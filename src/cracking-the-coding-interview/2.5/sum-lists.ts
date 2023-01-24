import { SinglyLinkedList } from "../../datastructures";

/**
 * You have two numbers represented by a linked list, where each node contains a single
 * digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a
 * function that adds the two numbers and returns the sum as a linked list.
 * EXAMPLE
 * Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
 * Output: 2 -> 1 -> 9. That is, 912.
 *
 * Time: O(N) where N is the number of digits in the biggest number
 * Space: O(N)
 */
export function sumLists(
    num1: SinglyLinkedList<number>,
    num2: SinglyLinkedList<number>,
) {
    let current1: any = num1.head;
    let current2: any = num2.head;

    let overflow = 0;

    const result = new SinglyLinkedList<number>();

    while (current1 || current2) {
        let sumResult = 0;

        if (current1 && current2) {
            sumResult = current1.value + current2.value + overflow;
        } else if (current1) {
            sumResult = current1.value + overflow;
        } else if (current2) {
            sumResult = current2.value + overflow;
        }

        if (sumResult >= 10) {
            overflow = 1;
            sumResult = sumResult % 10;
        } else {
            overflow = 0;
        }

        result.push(sumResult);

        current1 = current1?.next;
        current2 = current2?.next;
    }

    if (overflow) {
        result.push(overflow);
    }

    return result;
}

/**
 * FOLLOW UP
 * Suppose the digits are stored in forward order. Repeat the above problem.
 * EXAMPLE
 * lnput:(6 -> 1 -> 7) + (2 -> 9 -> 5).That is,617 + 295.
 * Output: 9 -> 1 -> 2. That is, 912.
 *
 * Time: O(N) where N is the number of digits in the biggest number
 * Space: O(N)
 */
export function sumListsForward(
    num1: SinglyLinkedList<number>,
    num2: SinglyLinkedList<number>,
) {
    // O(p)
    reverse(num1);

    console.log(num1.toString());
    // O(r)
    reverse(num2);

    // O(max(length(p), length(r)))
    const result = sumLists(num1, num2);

    // O(max(length(p), length(r)))
    reverse(result);

    return result;
}

function reverse(num: SinglyLinkedList<number>) {
    if (!num.head || !num.tail) return;

    let current: any = num.head;
    let prev = undefined;

    while (current) {
        const next = current.next;

        current.next = prev;

        prev = current;
        current = next;
    }

    // Switch head and tail
    const oldHead = num.head;
    num.head = num.tail;
    num.tail = oldHead;
}
