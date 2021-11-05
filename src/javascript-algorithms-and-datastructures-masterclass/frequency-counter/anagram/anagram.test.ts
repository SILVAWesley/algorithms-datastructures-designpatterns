import { checkAnagram } from "./anagram";

describe("anagram | Simple | 01", () => {
    test("empty strings", () => {
        expect(checkAnagram("", "")).toBe(true);
        expect(checkAnagram("", "h")).toBe(false);
        expect(checkAnagram("h", "")).toBe(false);
    });

    test("simple strings", () => {
        expect(checkAnagram("hello world", "w")).toBe(false);
        expect(checkAnagram("helll world", "hello world")).toBe(false);
        expect(checkAnagram("world hello", "hello world")).toBe(true);
        expect(checkAnagram("world hello", "hello  world")).toBe(false);
        expect(checkAnagram("world  hello", "hello  world")).toBe(true);
        expect(checkAnagram("anagram", "margana")).toBe(true);
    });

    test("complex strings", () => {
        expect(checkAnagram("ánágrám", "grámaná")).toBe(false);
        expect(checkAnagram("ánágrám", "grámáná")).toBe(true);
        expect(checkAnagram("# Ahel", "#@hel")).toBe(false);
    });
});
