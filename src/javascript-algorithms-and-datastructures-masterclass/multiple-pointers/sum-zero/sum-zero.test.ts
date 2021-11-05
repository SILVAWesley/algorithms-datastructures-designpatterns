import { sumZero } from "./sum-zero";

describe("count-unique-values | Simple | 01", () => {
    test("empty", () => {
        expect(sumZero([])).toBe(undefined);
    });

    test("one element", () => {
        expect(sumZero([1])).toBe(undefined);
        expect(sumZero([10])).toBe(undefined);
    });

    test("many elements", () => {
        expect(sumZero([10, 10])).toBe(undefined);
        expect(sumZero([-10, 10])).toStrictEqual([-10, 10]);
        expect(sumZero([-10, -2, 0, 0, 2, 2, 10, 10])).toStrictEqual([-10, 10]);
    });
});
