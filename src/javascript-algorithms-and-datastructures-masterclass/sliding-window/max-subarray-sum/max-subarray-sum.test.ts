import { maxSubarraySum } from "./max-subarray-sum";

describe("max-subarray-sum | Simple | 01", () => {
    test("empty", () => {
        expect(maxSubarraySum([], 0)).toBe(null);
    });

    test("one element", () => {
        expect(maxSubarraySum([1], 1)).toBe(1);
        expect(maxSubarraySum([1], 2)).toBe(null);
    });

    test("many elements", () => {
        expect(maxSubarraySum([1, 2, 5], 3)).toBe(8);
        expect(maxSubarraySum([1, 2, 5, -1], 3)).toBe(8);
        expect(maxSubarraySum([1, 2, 5, -1], 1)).toBe(5);
        expect(maxSubarraySum([1, 2, 5, -1], 2)).toBe(7);
        expect(maxSubarraySum([-1, -2, -5, -1], 2)).toBe(-3);
    });
});
