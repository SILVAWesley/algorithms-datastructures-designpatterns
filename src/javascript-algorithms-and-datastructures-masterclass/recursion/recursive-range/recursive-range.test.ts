import { recursiveRange } from "./recursive-range";

describe("power | Simple | 01", () => {
    test("base case", () => {
        expect(recursiveRange(0)).toStrictEqual(0);
    });

    test("other cases", () => {
        expect(recursiveRange(1)).toStrictEqual(1);
        expect(recursiveRange(2)).toStrictEqual(3);
        expect(recursiveRange(3)).toStrictEqual(6);
        expect(recursiveRange(4)).toStrictEqual(10);
    });
});
