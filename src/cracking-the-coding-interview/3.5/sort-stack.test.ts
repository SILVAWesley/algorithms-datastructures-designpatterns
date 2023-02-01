import { Stack } from "../../datastructures";
import { sortStack } from "./sort-stack";

describe("sort-stack", () => {
    test("sort-stack | test with len 0", () => {
        const stack = new Stack<number>();

        sortStack(stack);

        expect(stack.toString()).toBe("[]");
    });

    test("sort-stack | test with len 1", () => {
        const stack = new Stack<number>();

        stack.push(6);

        sortStack(stack);

        expect(stack.toString()).toBe("[6]");
    });

    test("sort-stack | test with len 2 in incorrect order", () => {
        const stack = new Stack<number>();

        stack.push(10);
        stack.push(6);

        sortStack(stack);

        expect(stack.toString()).toBe("[6, 10]");
    });

    test("sort-stack | test with len 2 in correct order", () => {
        const stack = new Stack<number>();

        stack.push(6);
        stack.push(10);

        sortStack(stack);

        expect(stack.toString()).toBe("[6, 10]");
    });

    test("sort-stack | test sorted", () => {
        const stack = new Stack<number>();

        stack.push(6);
        stack.push(10);
        stack.push(15);
        stack.push(20);
        stack.push(25);
        stack.push(30);
        stack.push(35);

        sortStack(stack);

        expect(stack.toString()).toBe("[6, 10, 15, 20, 25, 30, 35]");
    });

    test("sort-stack | test reverse sorted", () => {
        const stack = new Stack<number>();

        stack.push(35);
        stack.push(30);
        stack.push(25);
        stack.push(20);
        stack.push(15);
        stack.push(10);
        stack.push(6);

        sortStack(stack);

        expect(stack.toString()).toBe("[6, 10, 15, 20, 25, 30, 35]");
    });

    test("sort-stack | test example", () => {
        const stack = new Stack<number>();

        stack.push(6);
        stack.push(5);
        stack.push(1);
        stack.push(2);
        stack.push(10);

        sortStack(stack);

        expect(stack.toString()).toBe("[1, 2, 5, 6, 10]");
    });
});
