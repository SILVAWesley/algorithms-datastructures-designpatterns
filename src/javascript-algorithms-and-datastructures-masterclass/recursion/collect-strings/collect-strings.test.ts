import { collectStrings } from "./collect-strings";

describe("collectStrings | Simple | 01", () => {
    test("empty", () => {
        expect(collectStrings({})).toStrictEqual([]);
    });

    test("one key", () => {
        expect(collectStrings({ x: 1 })).toStrictEqual([]);
        expect(collectStrings({ y: "1" })).toStrictEqual(["1"]);
        expect(collectStrings({ z: "#" })).toStrictEqual(["#"]);
    });

    test("many keys", () => {
        expect(collectStrings({ x: "a", y: "b", z: "c" })).toStrictEqual([
            "a",
            "b",
            "c",
        ]);

        expect(
            collectStrings({ employee: 1, employer: 2, worker: 3 }),
        ).toStrictEqual([]);

        expect(
            collectStrings({ employee: "1", employer: 2, worker: 3 }),
        ).toStrictEqual(["1"]);
    });
});
