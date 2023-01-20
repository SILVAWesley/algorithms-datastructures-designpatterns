import { SinglyLinkedList, SinglyLinkedListNode } from "src/datastructures";
// k = 3
// p1 = 6; p2 = 3
// 1 2 3 4 5 6 7
//       ^     ^

/**
 * Implement an algorithm to find the kth to last element of a singly linked list
 *
 * ITERATIVE
 */
export function returnKthToLast<T>(
    list: SinglyLinkedList<T>,
    k: number,
): T | null {
    if (k < 0 || k >= list.length) return null;

    let p1 = list.head;
    let p1Index = 0;

    let p2 = list.head;

    while (p1?.next && p2) {
        if (p1Index >= k) {
            p2 = p2.next;
        }

        p1 = p1.next;
        p1Index++;
    }

    return p2?.value || null;
}

/**
 * RECURSIVE
 */
export function returnKthToLastRecursive<T>(
    list: SinglyLinkedList<T>,
    k: number,
): T | null {
    if (k < 0 || k >= list.length) return null;

    const node = returnKthToLastRecursiveHelper<T>(list.head, k);

    return node?.node?.value;
}

function returnKthToLastRecursiveHelper<T>(
    current: SinglyLinkedListNode<T> | null,
    k: number,
) {
    if (!current) {
        return { node: null, index: -1 };
    }

    const nodeIndex: any = returnKthToLastRecursiveHelper(current.next, k);

    if (nodeIndex.index === k) {
        return nodeIndex;
    }

    return { node: current, index: nodeIndex.index + 1 };
}
