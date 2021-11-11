import { fib } from "./fib";

describe("fib | Simple | 01", () => {
    test("base cases", () => {
        expect(fib(0)).toStrictEqual(-1);
        expect(fib(1)).toStrictEqual(1);
        expect(fib(2)).toStrictEqual(1);
    });

    test("recursive cases", () => {
        expect(fib(3)).toStrictEqual(2);
        expect(fib(4)).toStrictEqual(3);
        expect(fib(5)).toStrictEqual(5);
        expect(fib(6)).toStrictEqual(8);
    });
});
