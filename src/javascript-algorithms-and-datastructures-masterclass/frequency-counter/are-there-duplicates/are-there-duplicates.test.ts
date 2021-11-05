import { areThereDuplicates } from "./are-there-duplicates";

describe("are-there-duplicates | Simple | 01", () => {
    test("empty", () => {
        expect(areThereDuplicates()).toBe(false);
        expect(areThereDuplicates("", "")).toBe(true);
    });

    test("simple", () => {
        expect(areThereDuplicates(1, "1")).toBe(false);
        expect(areThereDuplicates("1", "1")).toBe(true);
        expect(areThereDuplicates("a", "1", "1")).toBe(true);
        expect(areThereDuplicates("1", "a", "1")).toBe(true);
    });

    test("complex", () => {
        expect(areThereDuplicates(5, 10, 1, 4, 3, 1, 2, 1)).toBe(true);
        expect(areThereDuplicates(9, 99, 999, 9999)).toBe(false);
        expect(areThereDuplicates(9, 99, 999, 9999, 9)).toBe(true);
    });
});
