import { productOfArray } from "./product-of-array";

describe("power | Simple | 01", () => {
    test("empty", () => {
        expect(productOfArray([])).toStrictEqual(1);
    });

    test("one element", () => {
        expect(productOfArray([1])).toStrictEqual(1);
        expect(productOfArray([30])).toStrictEqual(30);
        expect(productOfArray([-4])).toStrictEqual(-4);
    });

    test("many elements", () => {
        expect(productOfArray([1, 30])).toStrictEqual(30);
        expect(productOfArray([30, 5])).toStrictEqual(150);
        expect(productOfArray([-4, 4])).toStrictEqual(-16);
        expect(productOfArray([-4, 4, -2])).toStrictEqual(32);
    });
});
