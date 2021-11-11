import { capitalizeWords } from "./capitalize-words";

describe("capitalizeWords | Simple | 01", () => {
    test("empty", () => {
        expect(capitalizeWords([])).toStrictEqual([]);
    });

    test("one element", () => {
        expect(capitalizeWords(["a"])).toStrictEqual(["A"]);
        expect(capitalizeWords(["9"])).toStrictEqual(["9"]);
        expect(capitalizeWords(["#"])).toStrictEqual(["#"]);
    });

    test("many elements", () => {
        expect(capitalizeWords(["a", "b", "c"])).toStrictEqual(["A", "B", "C"]);
        expect(capitalizeWords(["9", "9", "9", "9"])).toStrictEqual([
            "9",
            "9",
            "9",
            "9",
        ]);
        expect(capitalizeWords(["hello", "programmer"])).toStrictEqual([
            "HELLO",
            "PROGRAMMER",
        ]);
    });
});
