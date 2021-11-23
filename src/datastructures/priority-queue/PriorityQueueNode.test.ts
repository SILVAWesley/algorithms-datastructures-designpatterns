import { PriorityQueueNode } from "./PriorityQueueNode";

describe("PriorityQueueNode | Simple | 01", () => {
    test("numeric value", () => {
        const pqNode = new PriorityQueueNode(0, 10);

        expect(pqNode.priority).toBe(0);
        expect(pqNode.value).toBe(10);
    });

    test("string value", () => {
        const pqNode = new PriorityQueueNode(100, "hello");

        expect(pqNode.priority).toBe(100);
        expect(pqNode.value).toBe("hello");
    });

    test("object value | one next", () => {
        const pqNode = new PriorityQueueNode(-10, { x: 10, y: "hello" });

        expect(pqNode.priority).toBe(-10);
        expect(pqNode.value).toStrictEqual({ x: 10, y: "hello" });
    });

    test("null value | null next", () => {
        const pqNode = new PriorityQueueNode(0, null);

        expect(pqNode.priority).toBe(0);
        expect(pqNode.value).toBe(null);
    });
});
