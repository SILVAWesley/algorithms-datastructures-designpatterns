import { SinglyLinkedListNode } from "src/datastructures";

/**
 * : Implement an algorithm to delete a node in the middle (i.e., any node but
 * the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
 * that node.
 */
export function deleteMiddleNode<T>(node: SinglyLinkedListNode<T>) {
    if (node && node.next) {
        node.value = node.next?.value as T;
        node.next = node.next?.next;
    }
}
