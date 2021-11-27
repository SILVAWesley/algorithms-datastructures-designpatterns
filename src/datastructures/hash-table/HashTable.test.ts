import { HashTable } from "./HashTable";

describe("HashTable | Simple | set and get | 01", () => {
    test("one element", () => {
        const ht = new HashTable();

        expect(ht.get("x")).toBe(undefined);

        ht.set("x", 10);
        expect(ht.get("x")).toBe(10);

        expect(ht.get("y")).toBe(undefined);
    });

    test("many elements", () => {
        const ht = new HashTable();

        ht.set("x", 10);
        expect(ht.get("x")).toBe(10);

        ht.set("y", 20);
        expect(ht.get("y")).toBe(20);

        ht.set("z", -10);
        expect(ht.get("z")).toBe(-10);
    });
});

describe("HashTable | Simple | keys | 01", () => {
    test("one element", () => {
        const ht = new HashTable();

        expect(ht.keys()).toStrictEqual([]);

        ht.set("x", 10);
        expect(ht.keys()).toStrictEqual(["x"]);
    });

    test("many elements", () => {
        const ht = new HashTable();

        ht.set("x", 10);
        expect(ht.keys()).toStrictEqual(["x"]);

        ht.set("y", 20);
        expect(ht.keys()).toStrictEqual(["x", "y"]);

        ht.set("z", -10);
        expect(ht.keys()).toStrictEqual(["x", "y", "z"]);
    });
});

describe("HashTable | Simple | delete | 01", () => {
    test("empty", () => {
        const ht = new HashTable();

        expect(ht.delete("x")).toBe(undefined);
    });

    test("one element", () => {
        const ht = new HashTable();

        ht.set("x", 10);

        expect(ht.delete("x")).toBe(10);
        expect(ht.delete("x")).toBe(undefined);
    });

    test("many elements", () => {
        const ht = new HashTable();

        ht.set("x", 10);
        ht.set("y", 20);
        ht.set("z", -10);

        expect(ht.delete("x")).toBe(10);
        expect(ht.delete("x")).toBe(undefined);

        expect(ht.delete("y")).toBe(20);
        expect(ht.delete("y")).toBe(undefined);

        expect(ht.delete("z")).toBe(-10);
        expect(ht.delete("z")).toBe(undefined);
    });
});
