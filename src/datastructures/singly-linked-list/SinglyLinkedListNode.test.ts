import { SinglyLinkedListNode } from "./SinglyLinkedListNode";

describe("SinglyLinkedListNode | Simple | 01", () => {
    test("numeric value | empty next", () => {
        const sllNode = new SinglyLinkedListNode(null, 10);

        expect(sllNode.next).toBe(null);
        expect(sllNode.value).toBe(10);
    });

    test("string value | empty next", () => {
        const sllNode = new SinglyLinkedListNode(null, "testing");

        expect(sllNode.next).toBe(null);
        expect(sllNode.value).toBe("testing");
    });

    test("object value | one next", () => {
        const sllNodeChild = new SinglyLinkedListNode(null, {
            content: "Hello",
            num: 0,
        });
        const sllNodeParent = new SinglyLinkedListNode(sllNodeChild, {
            content: "World",
            num: 1,
        });

        expect(sllNodeParent.next).toBe(sllNodeChild);
        expect(sllNodeParent.value).toMatchObject({ content: "World", num: 1 });

        expect(sllNodeChild.next).toBe(null);
        expect(sllNodeChild.value).toStrictEqual({ content: "Hello", num: 0 });
    });

    test("null value | null next", () => {
        const sllNode = new SinglyLinkedListNode(null, null);

        expect(sllNode.next).toBe(null);
        expect(sllNode.value).toBe(null);
    });
});
