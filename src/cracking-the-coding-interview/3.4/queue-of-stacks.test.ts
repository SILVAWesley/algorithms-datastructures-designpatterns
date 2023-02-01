import { QueueOfStacks } from "./queue-of-stacks";

describe("queue-of-stacks", () => {
    test("queue-of-stacks | test add", () => {
        const queue = new QueueOfStacks();

        expect(queue.peek()).toBeUndefined();
        expect(queue.isEmpty()).toBeTruthy();

        queue.add(1);
        expect(queue.peek()).toBe(1);
        expect(queue.isEmpty()).toBeFalsy();

        queue.add(2);
        expect(queue.peek()).toBe(1);
        expect(queue.isEmpty()).toBeFalsy();

        queue.add(3);
        expect(queue.peek()).toBe(1);
        expect(queue.isEmpty()).toBeFalsy();
    });

    test("queue-of-stacks | test remove", () => {
        const queue = new QueueOfStacks();

        expect(queue.peek()).toBeUndefined();
        expect(queue.isEmpty()).toBeTruthy();

        queue.add(1);
        queue.add(2);
        queue.add(3);
        expect(queue.peek()).toBe(1);
        expect(queue.isEmpty()).toBeFalsy();

        expect(queue.remove()).toBe(1);

        expect(queue.peek()).toBe(2);
        expect(queue.isEmpty()).toBeFalsy();

        queue.add(-1);

        expect(queue.peek()).toBe(2);
        expect(queue.isEmpty()).toBeFalsy();

        expect(queue.remove()).toBe(2);

        expect(queue.peek()).toBe(3);
        expect(queue.isEmpty()).toBeFalsy();

        expect(queue.remove()).toBe(3);

        expect(queue.peek()).toBe(-1);
        expect(queue.isEmpty()).toBeFalsy();

        expect(queue.remove()).toBe(-1);

        expect(queue.peek()).toBeUndefined();
        expect(queue.isEmpty()).toBeTruthy();

        expect(queue.remove()).toBeUndefined();

        expect(queue.peek()).toBeUndefined();
        expect(queue.isEmpty()).toBeTruthy();

        queue.add(-10);

        expect(queue.peek()).toBe(-10);
        expect(queue.isEmpty()).toBeFalsy();

        expect(queue.remove()).toBe(-10);

        expect(queue.peek()).toBeUndefined();
        expect(queue.isEmpty()).toBeTruthy();
    });
});
