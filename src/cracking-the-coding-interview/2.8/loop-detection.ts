import { SinglyLinkedListNode } from "../../datastructures";

/**
 * Given a circular linked list, implement an algorithm that returns the node at the
 * beginning of the loop.
 * DEFINITION
 * Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so
 * as to make a loop in the linked list
 *
 * Time: O(N), Space: O(N), where N is the length of the linked list
 */
export function detectLoop<T>(head: SinglyLinkedListNode<T>) {
    const visited: Map<any, any> = new Map();

    let current: any = head;

    while (current) {
        if (!visited.has(current)) {
            visited.set(current, true);
        } else {
            return current;
        }

        current = current.next;
    }

    return undefined;
}
