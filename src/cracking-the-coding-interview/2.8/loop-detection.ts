import { SinglyLinkedListNode } from "../../datastructures";

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
