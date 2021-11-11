import { capitalizeFirst } from "./capitalize-first";

describe("capitalizeFirst | Simple | 01", () => {
    test("empty", () => {
        expect(capitalizeFirst([])).toStrictEqual([]);
    });

    test("one element", () => {
        expect(capitalizeFirst(["a"])).toStrictEqual(["A"]);
        expect(capitalizeFirst(["9"])).toStrictEqual(["9"]);
        expect(capitalizeFirst(["#"])).toStrictEqual(["#"]);
    });

    test("many elements", () => {
        expect(capitalizeFirst(["a", "b", "c"])).toStrictEqual(["A", "B", "C"]);
        expect(capitalizeFirst(["9", "9", "9", "9"])).toStrictEqual([
            "9",
            "9",
            "9",
            "9",
        ]);
        expect(capitalizeFirst(["hello", "programmer"])).toStrictEqual([
            "Hello",
            "Programmer",
        ]);
    });
});
