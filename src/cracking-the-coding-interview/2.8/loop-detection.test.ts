import { SinglyLinkedList, SinglyLinkedListNode } from "../../datastructures";
import { detectLoop } from "./loop-detection";

describe("loop-detection", () => {
    test("loop-detection | question example", () => {
        const nodeC = new SinglyLinkedListNode<string>(null, "C");
        const nodeE = new SinglyLinkedListNode<string>(nodeC, "E");
        const nodeD = new SinglyLinkedListNode<string>(nodeE, "D");
        const nodeB = new SinglyLinkedListNode<string>(nodeC, "B");
        const nodeA = new SinglyLinkedListNode<string>(nodeB, "A");

        nodeC.next = nodeD;

        // A -> B -> C -> D -> E -> C -> D -> E ...

        expect(detectLoop(nodeA).value).toBe("C");
    });

    test("loop-detection | no loop", () => {
        const nodeE = new SinglyLinkedListNode<string>(null, "E");
        const nodeD = new SinglyLinkedListNode<string>(nodeE, "D");
        const nodeC = new SinglyLinkedListNode<string>(nodeD, "C");
        const nodeB = new SinglyLinkedListNode<string>(nodeC, "B");
        const nodeA = new SinglyLinkedListNode<string>(nodeB, "A");

        nodeC.next = nodeD;

        // A -> B -> C -> D -> E

        expect(detectLoop(nodeA)).toBeUndefined();
    });

    test("loop-detection | one node", () => {
        const nodeA = new SinglyLinkedListNode<string>(null, "A");
        expect(detectLoop(nodeA)).toBeUndefined();
    });
});
