import { Stack } from "./Stack";

describe("Stack | Simple | push | 01", () => {
    test("empty stack", () => {
        const stack = new Stack();

        expect(stack.top).toBe(null);
        expect(stack.length).toBe(0);
    });

    test("one element", () => {
        const stack = new Stack();

        expect(stack.push(10)).toBe(1);
        expect(stack.top?.value).toBe(10);
        expect(stack.length).toBe(1);
        expect(stack.peek()).toBe(10);
        expect(stack.toString()).toBe("[10]");
    });

    test("many elements", () => {
        const stack = new Stack();

        expect(stack.push(10)).toBe(1);
        expect(stack.top?.value).toBe(10);
        expect(stack.length).toBe(1);
        expect(stack.peek()).toBe(10);
        expect(stack.toString()).toBe("[10]");

        expect(stack.push(20)).toBe(2);
        expect(stack.top?.value).toBe(20);
        expect(stack.length).toBe(2);
        expect(stack.peek()).toBe(20);
        expect(stack.toString()).toBe("[20, 10]");

        expect(stack.push(30)).toBe(3);
        expect(stack.top?.value).toBe(30);
        expect(stack.length).toBe(3);
        expect(stack.peek()).toBe(30);
        expect(stack.toString()).toBe("[30, 20, 10]");

        expect(stack.push(40)).toBe(4);
        expect(stack.top?.value).toBe(40);
        expect(stack.length).toBe(4);
        expect(stack.peek()).toBe(40);
        expect(stack.toString()).toBe("[40, 30, 20, 10]");

        expect(stack.push(50)).toBe(5);
        expect(stack.top?.value).toBe(50);
        expect(stack.length).toBe(5);
        expect(stack.peek()).toBe(50);
        expect(stack.toString()).toBe("[50, 40, 30, 20, 10]");
    });
});

describe("Stack | Simple | pop | 01", () => {
    test("empty stack", () => {
        const stack = new Stack();

        expect(stack.pop()).toBe(undefined);

        expect(stack.top).toBe(null);
        expect(stack.length).toBe(0);
    });

    test("one element", () => {
        const stack = new Stack();

        stack.push(10);

        expect(stack.pop()).toBe(10);
        expect(stack.top).toBe(null);
        expect(stack.length).toBe(0);
        expect(stack.peek()).toBe(undefined);
        expect(stack.toString()).toBe("[]");
    });

    test("many elements", () => {
        const stack = new Stack();

        stack.push(10);
        stack.push(20);
        stack.push(30);
        stack.push(40);
        stack.push(50);

        expect(stack.pop()).toBe(50);
        expect(stack.top?.value).toBe(40);
        expect(stack.length).toBe(4);
        expect(stack.peek()).toBe(40);
        expect(stack.toString()).toBe("[40, 30, 20, 10]");

        expect(stack.pop()).toBe(40);
        expect(stack.top?.value).toBe(30);
        expect(stack.length).toBe(3);
        expect(stack.peek()).toBe(30);
        expect(stack.toString()).toBe("[30, 20, 10]");

        expect(stack.pop()).toBe(30);
        expect(stack.top?.value).toBe(20);
        expect(stack.length).toBe(2);
        expect(stack.peek()).toBe(20);
        expect(stack.toString()).toBe("[20, 10]");

        expect(stack.pop()).toBe(20);
        expect(stack.top?.value).toBe(10);
        expect(stack.length).toBe(1);
        expect(stack.peek()).toBe(10);
        expect(stack.toString()).toBe("[10]");

        expect(stack.pop()).toBe(10);
        expect(stack.top).toBe(null);
        expect(stack.length).toBe(0);
        expect(stack.peek()).toBe(undefined);
        expect(stack.toString()).toBe("[]");
    });
});
