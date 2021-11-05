import { averagePair } from "./average-pair";

describe("average-pair | Simple | 01", () => {
    test("empty", () => {
        expect(averagePair([], 0)).toBe(false);
    });

    test("one element", () => {
        expect(averagePair([1], 1)).toBe(false);
        expect(averagePair([10], 10)).toBe(false);
    });

    test("two elements", () => {
        expect(averagePair([0, 1], 0.5)).toBe(true);
        expect(averagePair([1, 0], 0.5)).toBe(true);
    });

    test("many elements", () => {
        expect(averagePair([0, 0, 0, 0, 1], 0.5)).toBe(true);
        expect(averagePair([1, 2, 2, 3, 5, 10], 3.5)).toBe(true);
        expect(averagePair([1, 2, 2, 3, 5, 10], 7.5)).toBe(true);
        expect(averagePair([1, 2, 2, 3, 5, 10], 2)).toBe(true);
        expect(averagePair([1, 2, 2, 3, 5, 10], 5.5)).toBe(true);
    });
});
