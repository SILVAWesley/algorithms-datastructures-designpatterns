import { factorial } from "./factorial";

describe("factorial | Simple | 01", () => {
    test("base cases", () => {
        expect(factorial(0)).toStrictEqual(1);
        expect(factorial(1)).toStrictEqual(1);
    });

    test("recursive cases", () => {
        expect(factorial(2)).toStrictEqual(2);
        expect(factorial(3)).toStrictEqual(6);
        expect(factorial(4)).toStrictEqual(24);
        expect(factorial(5)).toStrictEqual(120);
        expect(factorial(6)).toStrictEqual(720);
    });
});
