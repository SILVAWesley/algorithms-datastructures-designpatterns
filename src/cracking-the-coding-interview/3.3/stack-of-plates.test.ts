import { StackOfPlates } from "./stack-of-plates";

describe("stack-of-plates", () => {
    test("stack-of-plates | push", () => {
        const stack = new StackOfPlates(3);

        expect(stack.isEmpty()).toBeTruthy();
        expect(stack.peek()).toBeUndefined();
        expect(stack.stacks.length).toBe(0);

        stack.push(1);

        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.peek()).toBe(1);
        expect(stack.stacks.length).toBe(1);

        stack.push(2);

        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.peek()).toBe(2);
        expect(stack.stacks.length).toBe(1);

        stack.push(3);

        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.peek()).toBe(3);
        expect(stack.stacks.length).toBe(1);

        stack.push(4);

        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.peek()).toBe(4);
        expect(stack.stacks.length).toBe(2);
    });

    test("stack-of-plates | pop", () => {
        const stack = new StackOfPlates(3);

        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);
        stack.push(6);

        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.peek()).toBe(6);
        expect(stack.stacks.length).toBe(2);

        expect(stack.pop()).toBe(6);

        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.peek()).toBe(5);
        expect(stack.stacks.length).toBe(2);

        expect(stack.pop()).toBe(5);

        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.peek()).toBe(4);
        expect(stack.stacks.length).toBe(2);

        expect(stack.pop()).toBe(4);

        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.peek()).toBe(3);
        expect(stack.stacks.length).toBe(1);

        expect(stack.pop()).toBe(3);

        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.peek()).toBe(2);
        expect(stack.stacks.length).toBe(1);

        expect(stack.pop()).toBe(2);

        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.peek()).toBe(1);
        expect(stack.stacks.length).toBe(1);

        expect(stack.pop()).toBe(1);

        expect(stack.isEmpty()).toBeTruthy();
        expect(stack.peek()).toBeUndefined();
        expect(stack.stacks.length).toBe(0);

        expect(stack.pop()).toBeUndefined();

        expect(stack.isEmpty()).toBeTruthy();
        expect(stack.peek()).toBeUndefined();
        expect(stack.stacks.length).toBe(0);
    });

    test("stack-of-plates | popAt", () => {
        const stack = new StackOfPlates(3);

        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);
        stack.push(6);

        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.peek()).toBe(6);
        expect(stack.stacks.length).toBe(2);

        expect(stack.popAt(-1)).toBeUndefined();
        expect(stack.popAt(2)).toBeUndefined();

        expect(stack.popAt(0)).toBe(3);

        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.peek()).toBe(6);
        expect(stack.stacks.length).toBe(2);

        expect(stack.popAt(0)).toBe(2);

        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.peek()).toBe(6);
        expect(stack.stacks.length).toBe(2);

        expect(stack.popAt(1)).toBe(6);

        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.peek()).toBe(5);
        expect(stack.stacks.length).toBe(2);

        expect(stack.popAt(1)).toBe(5);

        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.peek()).toBe(4);
        expect(stack.stacks.length).toBe(2);

        expect(stack.popAt(0)).toBe(1);

        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.peek()).toBe(4);
        expect(stack.stacks.length).toBe(1);

        expect(stack.popAt(1)).toBeUndefined();

        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.peek()).toBe(4);
        expect(stack.stacks.length).toBe(1);

        expect(stack.popAt(0)).toBe(4);

        expect(stack.isEmpty()).toBeTruthy();
        expect(stack.peek()).toBeUndefined();
        expect(stack.stacks.length).toBe(0);
    });
});
