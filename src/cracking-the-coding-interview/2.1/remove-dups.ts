import { SinglyLinkedList } from "src/datastructures";

/**
 * Write code to remove duplicates from an unsorted linked list.
 *
 * Time: O(n), Space: O(n)
 */
export function removeDups(list: SinglyLinkedList<number>) {
    if (!list.head || list.length === 1) return;

    const frequencyMap: { [k: number]: boolean } = {};
    let current: any = list.head;

    frequencyMap[current.value] = true;

    while (current?.next) {
        if (frequencyMap[current.next.value]) {
            current.next = current.next.next;
            list.length--;
        } else {
            frequencyMap[current.next.value] = true;
        }

        current = current.next;
    }
}

/**
 * FOLLOW UP
 * How would you solve this problem if a temporary buffer is not allowed?
 *
 * Time: O(n²), Space: O(1)
 */
export function removeDupsInPlace(list: SinglyLinkedList<number>) {
    if (!list.head || list.length === 1) return;

    let current: any = list.head;

    while (current) {
        let innerCurrent = current;

        while (innerCurrent?.next) {
            if (innerCurrent.next.value === current.value) {
                innerCurrent.next = innerCurrent.next.next;
                list.length--;
            }

            innerCurrent = innerCurrent.next;
        }

        current = current.next;
    }
}
