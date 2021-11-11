import { isPalindrome } from "./is-palindrome";

describe("isPalindrome | Simple | 01", () => {
    test("empty", () => {
        expect(isPalindrome("")).toStrictEqual(true);
    });

    test("one letter", () => {
        expect(isPalindrome("a")).toStrictEqual(true);
        expect(isPalindrome("A")).toStrictEqual(true);
        expect(isPalindrome("#")).toStrictEqual(true);
    });

    test("many letters", () => {
        expect(isPalindrome("aBc")).toStrictEqual(false);
        expect(isPalindrome("aBa")).toStrictEqual(true);
        expect(isPalindrome("baba")).toStrictEqual(false);
        expect(isPalindrome("baab")).toStrictEqual(true);
        expect(isPalindrome("abaab")).toStrictEqual(false);
        expect(isPalindrome("aaaaaaa")).toStrictEqual(true);
    });
});
