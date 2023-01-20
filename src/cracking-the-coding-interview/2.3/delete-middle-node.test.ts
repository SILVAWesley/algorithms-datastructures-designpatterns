import { deleteMiddleNode } from "./delete-middle-node";
import { SinglyLinkedList } from "../../datastructures";

describe("delete-middle-node", () => {
    test("delete-middle-node | question example", () => {
        const list = new SinglyLinkedList<string>();

        list.push("a");
        list.push("b");
        list.push("c");
        list.push("d");
        list.push("e");
        list.push("f");

        const cNode = list.get(2);

        if (cNode) {
            deleteMiddleNode(cNode);
        }

        expect(list.toString()).toBe("[a, b, d, e, f]");
    });

    test("delete-middle-node | 3 elements", () => {
        const list = new SinglyLinkedList<string>();

        list.push("a");
        list.push("b");
        list.push("c");

        const bNode = list.get(1);

        if (bNode) {
            deleteMiddleNode(bNode);
        }

        expect(list.toString()).toBe("[a, c]");
    });

    test("delete-middle-node | remove second to last", () => {
        const list = new SinglyLinkedList<string>();

        list.push("a");
        list.push("b");
        list.push("c");
        list.push("d");
        list.push("e");
        list.push("f");

        const eNode = list.get(4);

        if (eNode) {
            deleteMiddleNode(eNode);
        }

        expect(list.toString()).toBe("[a, b, c, d, f]");
    });
});
