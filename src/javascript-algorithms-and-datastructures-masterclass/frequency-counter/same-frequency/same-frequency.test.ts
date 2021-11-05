import { sameFrequency } from "./same-frequency";

describe("same | Simple | 01", () => {
    test("one digits", () => {
        expect(sameFrequency(0, 0)).toBe(true);
        expect(sameFrequency(1, 1)).toBe(true);
        expect(sameFrequency(4, 4)).toBe(true);
        expect(sameFrequency(9, 6)).toBe(false);
    });

    test("many digits", () => {
        expect(sameFrequency(5, 25)).toBe(false);
        expect(sameFrequency(52, 25)).toBe(true);
        expect(sameFrequency(25, 52)).toBe(true);
        expect(sameFrequency(522, 25)).toBe(false);
    });
});
