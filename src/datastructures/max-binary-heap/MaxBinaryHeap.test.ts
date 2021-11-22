import { MaxBinaryHeap } from "./MaxBinaryHeap";

describe("MaxBinaryHeap | Simple | insert | 01", () => {
    test("empty heap", () => {
        const heap = new MaxBinaryHeap();

        heap.insert(0);

        expect(heap.values).toStrictEqual([0]);
    });

    test("many elements", () => {
        const heap = new MaxBinaryHeap();

        heap.insert(41);
        heap.insert(39);
        heap.insert(33);
        heap.insert(18);
        heap.insert(27);
        heap.insert(12);

        expect(heap.values).toStrictEqual([41, 39, 33, 18, 27, 12]);

        heap.insert(55);

        expect(heap.values).toStrictEqual([55, 39, 41, 18, 27, 12, 33]);

        heap.insert(49);

        expect(heap.values).toStrictEqual([55, 49, 41, 39, 27, 12, 33, 18]);

        heap.insert(39);

        expect(heap.values).toStrictEqual([55, 49, 41, 39, 27, 12, 33, 18, 39]);

        heap.insert(-100);

        expect(heap.values).toStrictEqual([
            55, 49, 41, 39, 27, 12, 33, 18, 39, -100,
        ]);

        heap.insert(28);

        expect(heap.values).toStrictEqual([
            55, 49, 41, 39, 28, 12, 33, 18, 39, -100, 27,
        ]);

        heap.insert(100);

        expect(heap.values).toStrictEqual([
            100, 49, 55, 39, 28, 41, 33, 18, 39, -100, 27, 12,
        ]);
    });
});
