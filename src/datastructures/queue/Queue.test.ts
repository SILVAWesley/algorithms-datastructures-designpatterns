import { Queue } from "./Queue";

describe("Stack | Simple | push | 01", () => {
    test("empty stack", () => {
        const stack = new Queue();

        expect(stack.head).toBe(null);
        expect(stack.tail).toBe(null);
        expect(stack.length).toBe(0);
    });

    test("one element", () => {
        const stack = new Queue();

        expect(stack.push(10)).toBe(1);
        expect(stack.head?.value).toBe(10);
        expect(stack.length).toBe(1);
        expect(stack.peek()).toBe(10);
        expect(stack.toString()).toBe("[10]");
    });

    test("many elements", () => {
        const stack = new Queue();

        expect(stack.push(10)).toBe(1);
        expect(stack.head?.value).toBe(10);
        expect(stack.tail?.value).toBe(10);
        expect(stack.length).toBe(1);
        expect(stack.peek()).toBe(10);
        expect(stack.toString()).toBe("[10]");

        expect(stack.push(20)).toBe(2);
        expect(stack.head?.value).toBe(10);
        expect(stack.tail?.value).toBe(20);
        expect(stack.length).toBe(2);
        expect(stack.peek()).toBe(10);
        expect(stack.toString()).toBe("[10, 20]");

        expect(stack.push(30)).toBe(3);
        expect(stack.head?.value).toBe(10);
        expect(stack.tail?.value).toBe(30);
        expect(stack.length).toBe(3);
        expect(stack.peek()).toBe(10);
        expect(stack.toString()).toBe("[10, 20, 30]");

        expect(stack.push(40)).toBe(4);
        expect(stack.head?.value).toBe(10);
        expect(stack.tail?.value).toBe(40);
        expect(stack.length).toBe(4);
        expect(stack.peek()).toBe(10);
        expect(stack.toString()).toBe("[10, 20, 30, 40]");

        expect(stack.push(50)).toBe(5);
        expect(stack.head?.value).toBe(10);
        expect(stack.tail?.value).toBe(50);
        expect(stack.length).toBe(5);
        expect(stack.peek()).toBe(10);
        expect(stack.toString()).toBe("[10, 20, 30, 40, 50]");
    });
});

describe("Stack | Simple | pop | 01", () => {
    test("empty stack", () => {
        const stack = new Queue();

        expect(stack.poll()).toBe(undefined);

        expect(stack.head).toBe(null);
        expect(stack.tail).toBe(null);
        expect(stack.length).toBe(0);
    });

    test("one element", () => {
        const stack = new Queue();

        stack.push(10);

        expect(stack.poll()).toBe(10);
        expect(stack.head).toBe(null);
        expect(stack.tail).toBe(null);
        expect(stack.length).toBe(0);
        expect(stack.peek()).toBe(undefined);
        expect(stack.toString()).toBe("[]");
    });

    test("many elements", () => {
        const stack = new Queue();

        stack.push(10);
        stack.push(20);
        stack.push(30);
        stack.push(40);
        stack.push(50);

        expect(stack.poll()).toBe(10);
        expect(stack.head?.value).toBe(20);
        expect(stack.tail?.value).toBe(50);
        expect(stack.length).toBe(4);
        expect(stack.peek()).toBe(20);
        expect(stack.toString()).toBe("[20, 30, 40, 50]");

        expect(stack.poll()).toBe(20);
        expect(stack.head?.value).toBe(30);
        expect(stack.tail?.value).toBe(50);
        expect(stack.length).toBe(3);
        expect(stack.peek()).toBe(30);
        expect(stack.toString()).toBe("[30, 40, 50]");

        expect(stack.poll()).toBe(30);
        expect(stack.head?.value).toBe(40);
        expect(stack.tail?.value).toBe(50);
        expect(stack.length).toBe(2);
        expect(stack.peek()).toBe(40);
        expect(stack.toString()).toBe("[40, 50]");

        expect(stack.poll()).toBe(40);
        expect(stack.head?.value).toBe(50);
        expect(stack.tail?.value).toBe(50);
        expect(stack.length).toBe(1);
        expect(stack.peek()).toBe(50);
        expect(stack.toString()).toBe("[50]");

        expect(stack.poll()).toBe(50);
        expect(stack.head).toBe(null);
        expect(stack.tail).toBe(null);
        expect(stack.length).toBe(0);
        expect(stack.peek()).toBe(undefined);
        expect(stack.toString()).toBe("[]");
    });
});
