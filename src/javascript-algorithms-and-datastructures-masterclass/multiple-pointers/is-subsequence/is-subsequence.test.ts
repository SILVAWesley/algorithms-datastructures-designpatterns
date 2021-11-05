import { isSubsequence } from "./is-subsequence";

describe("count-unique-values | Simple | 01", () => {
    test("empty", () => {
        expect(isSubsequence("", "")).toBe(false);
    });

    test("one character", () => {
        expect(isSubsequence("a", "b")).toBe(false);
        expect(isSubsequence("a", "a")).toBe(true);
    });

    test("many characters", () => {
        expect(isSubsequence("abc", "a")).toBe(false);
        expect(isSubsequence("a", "abc")).toBe(true);
        expect(isSubsequence("hello world", "world")).toBe(false);
        expect(isSubsequence("world", "world")).toBe(true);
        expect(isSubsequence("world", "hello world")).toBe(true);
        expect(isSubsequence("world", "hello wolrd")).toBe(false);
    });
});
