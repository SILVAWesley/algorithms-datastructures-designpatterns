import { nestedEvenSum } from "./nested-even-sum";

describe("nestedEvenSum | Simple | 01", () => {
    test("empty", () => {
        expect(nestedEvenSum({})).toStrictEqual(0);
    });

    test("one key", () => {
        expect(nestedEvenSum({ x: 10 })).toStrictEqual(10);
        expect(nestedEvenSum({ x: -199 })).toStrictEqual(0);
        expect(nestedEvenSum({ x: -200 })).toStrictEqual(-200);
        expect(nestedEvenSum({ x: 0 })).toStrictEqual(0);
        expect(nestedEvenSum({ x: "-200" })).toStrictEqual(0);
    });

    test("many keys no nested objects", () => {
        expect(nestedEvenSum({ x: 10, y: 30 })).toStrictEqual(40);
        expect(nestedEvenSum({ x: -199, y: -200, z: "-5" })).toStrictEqual(
            -200,
        );
        expect(nestedEvenSum({ x: "-200", y: "-300" })).toStrictEqual(0);
        expect(nestedEvenSum({ x: 1, z: 2, k: 4 })).toStrictEqual(6);
    });
});
