import { StackMin } from "./stack-min";

describe("stack-min", () => {
    test("stack-min | push", () => {
        const stack = new StackMin();

        expect(stack.isEmpty()).toBeTruthy();
        expect(stack.top).toBeUndefined();
        expect(stack.minTop).toBeUndefined();
        expect(stack.min()).toBeUndefined();
        expect(stack.peek()).toBeUndefined();

        stack.push(1);

        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.top?.value).toBe(1);
        expect(stack.minTop?.value).toBe(1);
        expect(stack.min()).toBe(1);
        expect(stack.peek()).toBe(1);

        stack.push(2);

        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.top?.value).toBe(2);
        expect(stack.minTop?.value).toBe(1);
        expect(stack.min()).toBe(1);
        expect(stack.peek()).toBe(2);

        stack.push(-1);

        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.top?.value).toBe(-1);
        expect(stack.minTop?.value).toBe(-1);
        expect(stack.min()).toBe(-1);
        expect(stack.peek()).toBe(-1);
    });

    test("stack-main | pop", () => {
        const stack = new StackMin();

        expect(stack.isEmpty()).toBeTruthy();
        expect(stack.top).toBeUndefined();
        expect(stack.minTop).toBeUndefined();
        expect(stack.min()).toBeUndefined();
        expect(stack.peek()).toBeUndefined();

        stack.push(1);
        stack.push(2);
        stack.push(-1);
        stack.push(3);

        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.top?.value).toBe(3);
        expect(stack.minTop?.value).toBe(-1);
        expect(stack.min()).toBe(-1);
        expect(stack.peek()).toBe(3);

        expect(stack.pop()).toBe(3);

        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.top?.value).toBe(-1);
        expect(stack.minTop?.value).toBe(-1);
        expect(stack.min()).toBe(-1);
        expect(stack.peek()).toBe(-1);

        expect(stack.pop()).toBe(-1);

        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.top?.value).toBe(2);
        expect(stack.minTop?.value).toBe(1);
        expect(stack.min()).toBe(1);
        expect(stack.peek()).toBe(2);

        expect(stack.pop()).toBe(2);

        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.top?.value).toBe(1);
        expect(stack.minTop?.value).toBe(1);
        expect(stack.min()).toBe(1);
        expect(stack.peek()).toBe(1);

        expect(stack.pop()).toBe(1);

        expect(stack.isEmpty()).toBeTruthy();
        expect(stack.top?.value).toBeUndefined();
        expect(stack.minTop?.value).toBeUndefined();
        expect(stack.min()).toBeUndefined();
        expect(stack.peek()).toBeUndefined();

        stack.push(-5);

        expect(stack.isEmpty()).toBeFalsy();
        expect(stack.top?.value).toBe(-5);
        expect(stack.minTop?.value).toBe(-5);
        expect(stack.min()).toBe(-5);
        expect(stack.peek()).toBe(-5);
    });
});
