import { SinglyLinkedList } from "../../datastructures";

/**
 * Write code to partition a linked list around a value x, such that all nodes less than x come
 * before all nodes greater than or equal to x. If x is contained within the list the values of x only need
 * to be after the elements less than x (see below). The partition element x can appear anywhere in the
 * "right partition"; it does not need to appear between the left and right partitions.
 */
export function partition(list: SinglyLinkedList<number>, x: number) {
    if (!list.head || list.head === list.tail) return;

    let current: any = list.head;

    const partitioned = new SinglyLinkedList<number>();

    while (current?.next) {
        if (current.next?.value < x) {
            partitioned.unshift(current.next.value);

            if (list.tail === current.next) {
                list.tail = current;
            }

            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    if (list.head.value < x) {
        partitioned.unshift(list.head.value);
        list.head = list.head.next;
    }

    if (partitioned.tail && partitioned.head) {
        const oldHead = list.head;
        list.head = partitioned.head;
        partitioned.tail.next = oldHead;
    }
}
