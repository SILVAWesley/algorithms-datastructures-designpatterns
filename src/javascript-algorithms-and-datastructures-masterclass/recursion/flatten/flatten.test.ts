import { flatten } from "./flatten";

describe("flatten | Simple | 01", () => {
    test("empty array", () => {
        expect(flatten([])).toStrictEqual([]);
    });

    test("one element", () => {
        expect(flatten([1])).toStrictEqual([1]);
    });

    test("no nested arrays", () => {
        expect(flatten([1, 2, 3, 4, 5, -1, 10, -50])).toStrictEqual([
            1, 2, 3, 4, 5, -1, 10, -50,
        ]);
    });

    test("nested arrays", () => {
        expect(
            flatten([[1, 2, 3, [4], [5], [6, 7]], [1, [2]], [6], 5, 3]),
        ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 1, 2, 6, 5, 3]);

        expect(flatten([-1, [-2]])).toStrictEqual([-1, -2]);
    });
});
