import { SinglyLinkedList } from "../../datastructures";

/**
 * Given two (singly) linked lists, determine if the two lists intersect.
 * Return the intersecting node. Note that the intersection is defined based on reference, not value.
 * That is, if the kth node of the first linked list is the exact same node (by reference)
 * as the jth node of the second
 * linked list, then they are intersecting.
 *
 * Time: O(N), Space: O(M), where N is the size of the biggest linked list and M is the size of the
 * first linked list
 */
export function intersection<T>(
    list1: SinglyLinkedList<T>,
    list2: SinglyLinkedList<T>,
) {
    if (!list1.head || !list2.head) return;

    // No intersection
    if (list1.tail !== list2.tail) {
        return;
    }

    // offset
    let offset = Math.abs(list1.length - list2.length);
    const [biggerList, smallerList] =
        list1.length > list2.length ? [list1, list2] : [list2, list1];

    let currentBigger: any = biggerList.head;
    let currentSmaller: any = smallerList.head;

    while (offset > 0) {
        currentBigger = currentBigger.next;
        offset--;
    }

    // run through
    while (currentBigger && currentSmaller) {
        if (currentBigger === currentSmaller) {
            return currentBigger;
        }

        currentBigger = currentBigger.next;
        currentSmaller = currentSmaller.next;
    }
}
