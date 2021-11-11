import { stringifyNumbers } from "./stringify-numbers";

describe("reverse | Simple | 01", () => {
    test("empty", () => {
        expect(stringifyNumbers({})).toStrictEqual({});
    });

    test("one key", () => {
        expect(stringifyNumbers({ k: 1 })).toStrictEqual({ k: "1" });
        expect(stringifyNumbers({ k: "1" })).toStrictEqual({ k: "1" });
    });

    test("many keys no nested", () => {
        expect(stringifyNumbers({ k: 1, x: 2 })).toStrictEqual({
            k: "1",
            x: "2",
        });
        expect(stringifyNumbers({ k: 1, x: "2" })).toStrictEqual({
            k: "1",
            x: "2",
        });
        expect(stringifyNumbers({ x: 1, k: "1", y: "k" })).toStrictEqual({
            x: "1",
            k: "1",
            y: "k",
        });
    });
});
