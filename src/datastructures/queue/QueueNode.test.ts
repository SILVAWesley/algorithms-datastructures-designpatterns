import { QueueNode } from "./QueueNode";

describe("QueueNode | Simple | 01", () => {
    test("numeric value | empty next", () => {
        const stackNode = new QueueNode(null, null, 10);

        expect(stackNode.next).toBe(null);
        expect(stackNode.previous).toBe(null);
        expect(stackNode.value).toBe(10);
    });

    test("string value | empty next", () => {
        const stackNode = new QueueNode(null, null, "testing");

        expect(stackNode.next).toBe(null);
        expect(stackNode.previous).toBe(null);
        expect(stackNode.value).toBe("testing");
    });

    test("object value | one next", () => {
        const stackNodeChild = new QueueNode(null, null, {
            content: "Hello",
            num: 0,
        });
        const stackNodeParent = new QueueNode(stackNodeChild, null, {
            content: "World",
            num: 1,
        });

        expect(stackNodeParent.next).toBe(stackNodeChild);
        expect(stackNodeParent.value).toMatchObject({
            content: "World",
            num: 1,
        });

        expect(stackNodeChild.next).toBe(null);
        expect(stackNodeChild.value).toStrictEqual({
            content: "Hello",
            num: 0,
        });
    });

    test("null value | null next", () => {
        const sllNode = new QueueNode(null, null, null);

        expect(sllNode.next).toBe(null);
        expect(sllNode.value).toBe(null);
    });
});
