import { countUniqueValues } from "./count-unique-values";

describe("count-unique-values | Simple | 01", () => {
    test("empty", () => {
        expect(countUniqueValues([])).toBe(0);
    });

    test("one element", () => {
        expect(countUniqueValues([1])).toBe(1);
        expect(countUniqueValues([10])).toBe(1);
    });

    test("many elements", () => {
        expect(countUniqueValues([5, 10])).toBe(2);
        expect(countUniqueValues([1, 10, 11])).toBe(3);
        expect(countUniqueValues([1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe(1);
        expect(countUniqueValues([1, 1, 1, 1, 1, 1, 1, 1, 1, 2])).toBe(2);
    });
});
