import { DoublyLinkedListNode } from "./DoublyLinkedListNode";

describe("SinglyLinkedListNode | Simple | 01", () => {
    test("numeric value | empty next", () => {
        const dllNode = new DoublyLinkedListNode(null, null, 10);

        expect(dllNode.next).toBe(null);
        expect(dllNode.previous).toBe(null);
        expect(dllNode.value).toBe(10);
    });

    test("string value | empty next", () => {
        const dllNode = new DoublyLinkedListNode(null, null, "testing");

        expect(dllNode.next).toBe(null);
        expect(dllNode.previous).toBe(null);
        expect(dllNode.value).toBe("testing");
    });

    test("object value | one next", () => {
        const dllNodeChild = new DoublyLinkedListNode(null, null, {
            content: "Hello",
            num: 0,
        });
        const dllNodeParent = new DoublyLinkedListNode(dllNodeChild, null, {
            content: "World",
            num: 1,
        });

        expect(dllNodeParent.next).toBe(dllNodeChild);
        expect(dllNodeParent.value).toMatchObject({ content: "World", num: 1 });

        expect(dllNodeChild.next).toBe(null);
        expect(dllNodeChild.value).toStrictEqual({ content: "Hello", num: 0 });
    });

    test("null value | null next", () => {
        const sllNode = new DoublyLinkedListNode(null, null, null);

        expect(sllNode.next).toBe(null);
        expect(sllNode.value).toBe(null);
    });
});
