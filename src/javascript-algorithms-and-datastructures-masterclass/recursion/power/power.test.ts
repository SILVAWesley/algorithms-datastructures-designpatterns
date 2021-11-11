import { power } from "./power";

describe("power | Simple | 01", () => {
    test("base cases", () => {
        expect(power(1, 0)).toStrictEqual(1);
        expect(power(1, 1)).toStrictEqual(1);
        expect(power(0, 1)).toStrictEqual(0);
    });

    test("more complex cases", () => {
        expect(power(2, 0)).toStrictEqual(1);
        expect(power(4, 1)).toStrictEqual(4);
        expect(power(4, 4)).toStrictEqual(256);
        expect(power(10, 1)).toStrictEqual(10);
        expect(power(10, 2)).toStrictEqual(100);
    });
});
