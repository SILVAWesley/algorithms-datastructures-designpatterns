import { someRecursive } from "./some-recursive";

describe("reverse | Simple | 01", () => {
    test("empty", () => {
        expect(someRecursive([], () => true)).toStrictEqual(false);
        expect(someRecursive([], () => false)).toStrictEqual(false);
    });

    test("one element", () => {
        expect(someRecursive([1], () => true)).toBe(true);
        expect(someRecursive([1], () => false)).toStrictEqual(false);
    });

    test("many elements", () => {
        expect(
            someRecursive([2, 1, 3, 5], (val: number) => val % 2 === 0),
        ).toBe(true);

        expect(
            someRecursive([7, 1, 3, 5], (val: number) => val % 2 === 0),
        ).toBe(false);
    });
});
