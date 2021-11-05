import { same } from "./same";

describe("same | Simple | 01", () => {
    test("empty", () => {
        expect(same([], [])).toBe(true);
    });

    test("one element", () => {
        expect(same([1], [1])).toBe(true);
        expect(same([4], [4])).toBe(false);
        expect(same([5], [25])).toBe(true);
    });

    test("many elements", () => {
        expect(same([2, 5, 10, 3], [100, 4, 9, 25])).toBe(true);
    });
});
