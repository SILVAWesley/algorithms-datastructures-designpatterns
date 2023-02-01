import { ThreeStacks } from "./three-stacks";

describe("three-stacks", () => {
    test("three-stacks | peek and push", () => {
        const stack = new ThreeStacks();

        expect(stack.peek(0)).toBeUndefined();
        expect(stack.peek(1)).toBeUndefined();
        expect(stack.peek(2)).toBeUndefined();

        expect(stack.push("a", 0)).toBeTruthy();
        expect(stack.peek(0)).toBe("a");
        expect(stack.peek(1)).toBeUndefined();
        expect(stack.peek(2)).toBeUndefined();

        expect(stack.push("b", 0)).toBeTruthy();
        expect(stack.peek(0)).toBe("b");
        expect(stack.peek(1)).toBeUndefined();
        expect(stack.peek(2)).toBeUndefined();

        expect(stack.push("c", 2)).toBeTruthy();
        expect(stack.peek(2)).toBe("c");
        expect(stack.peek(0)).toBe("b");
        expect(stack.peek(1)).toBeUndefined();

        expect(stack.push("d", 1)).toBeTruthy();
        expect(stack.peek(1)).toBe("d");
        expect(stack.peek(0)).toBe("b");
        expect(stack.peek(2)).toBe("c");
    });

    test("three-stacks | pop and isEmpty", () => {
        const stack = new ThreeStacks();

        expect(stack.isEmpty(0)).toBeTruthy();
        expect(stack.isEmpty(1)).toBeTruthy();
        expect(stack.isEmpty(2)).toBeTruthy();

        expect(stack.push("a", 0)).toBeTruthy();
        expect(stack.push("d", 0)).toBeTruthy();
        expect(stack.push("e", 0)).toBeTruthy();
        expect(stack.push("b", 1)).toBeTruthy();
        expect(stack.push("f", 1)).toBeTruthy();
        expect(stack.push("c", 2)).toBeTruthy();

        expect(stack.isEmpty(0)).toBeFalsy();
        expect(stack.isEmpty(1)).toBeFalsy();
        expect(stack.isEmpty(2)).toBeFalsy();

        expect(stack.peek(0)).toBe("e");
        expect(stack.peek(1)).toBe("f");
        expect(stack.peek(2)).toBe("c");

        expect(stack.pop(0)).toBe("e");
        expect(stack.pop(0)).toBe("d");
        expect(stack.pop(0)).toBe("a");
        expect(stack.pop(0)).toBeUndefined();

        expect(stack.isEmpty(0)).toBeTruthy();
        expect(stack.isEmpty(1)).toBeFalsy();
        expect(stack.isEmpty(2)).toBeFalsy();

        expect(stack.pop(1)).toBe("f");
        expect(stack.pop(1)).toBe("b");
        expect(stack.pop(1)).toBeUndefined();

        expect(stack.isEmpty(0)).toBeTruthy();
        expect(stack.isEmpty(1)).toBeTruthy();
        expect(stack.isEmpty(2)).toBeFalsy();

        expect(stack.pop(2)).toBe("c");
        expect(stack.pop(2)).toBeUndefined();

        expect(stack.isEmpty(0)).toBeTruthy();
        expect(stack.isEmpty(1)).toBeTruthy();
        expect(stack.isEmpty(2)).toBeTruthy();

        expect(stack.push("g", 1)).toBeTruthy();
        expect(stack.peek(0)).toBeUndefined();
        expect(stack.peek(1)).toBe("g");
        expect(stack.peek(2)).toBeUndefined();

        expect(stack.isEmpty(0)).toBeTruthy();
        expect(stack.isEmpty(1)).toBeFalsy();
        expect(stack.isEmpty(2)).toBeTruthy();

        expect(stack.push("h", 0)).toBeTruthy();
        expect(stack.peek(0)).toBe("h");
        expect(stack.peek(1)).toBe("g");
        expect(stack.peek(2)).toBeUndefined();

        expect(stack.isEmpty(0)).toBeFalsy();
        expect(stack.isEmpty(1)).toBeFalsy();
        expect(stack.isEmpty(2)).toBeTruthy();

        expect(stack.push("i", 2)).toBeTruthy();
        expect(stack.peek(0)).toBe("h");
        expect(stack.peek(1)).toBe("g");
        expect(stack.peek(2)).toBe("i");

        expect(stack.isEmpty(0)).toBeFalsy();
        expect(stack.isEmpty(1)).toBeFalsy();
        expect(stack.isEmpty(2)).toBeFalsy();
    });
});
