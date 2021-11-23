import { PriorityQueue } from "./PriorityQueue";

describe("PriorityQueue | Simple | enqueue | 01", () => {
    test("empty", () => {
        const pQueue = new PriorityQueue();

        pQueue.enqueue(0, 10);

        expect(pQueue.toString()).toStrictEqual("[10]");
    });

    test("many elements", () => {
        const pQueue = new PriorityQueue();

        pQueue.enqueue(0, 10);
        expect(pQueue.toString()).toStrictEqual("[10]");

        pQueue.enqueue(1, 20);
        expect(pQueue.toString()).toStrictEqual("[10, 20]");

        pQueue.enqueue(1, 30);
        expect(pQueue.toString()).toStrictEqual("[10, 20, 30]");

        pQueue.enqueue(-1, 50);
        expect(pQueue.toString()).toStrictEqual("[50, 10, 30, 20]");
    });
});

describe("PriorityQueue | Simple | dequeue | 01", () => {
    test("empty", () => {
        const pQueue = new PriorityQueue();

        pQueue.dequeue();

        expect(pQueue.toString()).toStrictEqual("[]");
    });

    test("one element", () => {
        const pQueue = new PriorityQueue();

        pQueue.enqueue(0, 10);
        expect(pQueue.toString()).toBe("[10]");

        pQueue.dequeue();
        expect(pQueue.toString()).toBe("[]");
    });

    test("many elements", () => {
        const pQueue = new PriorityQueue();

        pQueue.enqueue(0, 10);
        pQueue.enqueue(1, 20);
        pQueue.enqueue(1, 30);
        pQueue.enqueue(-1, 50);
        expect(pQueue.toString()).toStrictEqual("[50, 10, 30, 20]");

        pQueue.dequeue();
        expect(pQueue.toString()).toBe("[10, 20, 30]");

        pQueue.dequeue();
        expect(pQueue.toString()).toBe("[30, 20]");

        pQueue.dequeue();
        expect(pQueue.toString()).toBe("[20]");

        pQueue.dequeue();
        expect(pQueue.toString()).toBe("[]");
    });
});
