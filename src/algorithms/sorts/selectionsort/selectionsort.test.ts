import { sort } from "./selectionsort";

describe("Selectionsort | Simple | 01", () => {
    test("empty", () => {
        const array: unknown[] = [];

        sort(array);

        expect(array).toStrictEqual([]);
    });

    test("one element", () => {
        const array: unknown[] = [1];
        sort(array);
        expect(array).toStrictEqual([1]);

        const array2: unknown[] = [-1];
        sort(array2);
        expect(array2).toStrictEqual([-1]);

        const array3: unknown[] = [0];
        sort(array3);
        expect(array3).toStrictEqual([0]);
    });

    test("two elements", () => {
        const array: unknown[] = [1, 0];
        sort(array);
        expect(array).toStrictEqual([0, 1]);

        const array2: unknown[] = [0, 1];
        sort(array2);
        expect(array2).toStrictEqual([0, 1]);
    });

    test("three elements", () => {
        const array: unknown[] = [1, 0, -1];
        sort(array);
        expect(array).toStrictEqual([-1, 0, 1]);

        const array2: unknown[] = [-1, 0, 1];
        sort(array2);
        expect(array2).toStrictEqual([-1, 0, 1]);

        const array3: unknown[] = [-1, 1, 0];
        sort(array3);
        expect(array3).toStrictEqual([-1, 0, 1]);

        const array4: unknown[] = [1, -1, 0];
        sort(array4);
        expect(array4).toStrictEqual([-1, 0, 1]);
    });

    test("many elements | already sorted", () => {
        const array: unknown[] = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        sort(array);
        expect(array).toStrictEqual([
            0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
        ]);

        const array2: unknown[] = [
            0, 10, 10, 20, 20, 30, 30, 40, 50, 60, 70, 80, 90, 100,
        ];
        sort(array2);
        expect(array2).toStrictEqual([
            0, 10, 10, 20, 20, 30, 30, 40, 50, 60, 70, 80, 90, 100,
        ]);
    });

    test("many elements | completly unsorted", () => {
        const array: unknown[] = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];
        sort(array);
        expect(array).toStrictEqual([
            0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
        ]);

        const array2: unknown[] = [
            100, 90, 80, 70, 70, 60, 60, 50, 50, 40, 30, 20, 10, 0,
        ];
        sort(array2);
        expect(array2).toStrictEqual([
            0, 10, 20, 30, 40, 50, 50, 60, 60, 70, 70, 80, 90, 100,
        ]);
    });

    test("many elements | random", () => {
        const array: unknown[] = Array.from(
            { length: 10000 },
            () => Math.random() * 100,
        );
        sort(array);
        expect(array).toStrictEqual(array.sort());

        const array2: unknown[] = Array.from(
            { length: 10000 },
            () => Math.random() * -10,
        );
        sort(array2);
        expect(array2).toStrictEqual(array2.sort());
    });
});
