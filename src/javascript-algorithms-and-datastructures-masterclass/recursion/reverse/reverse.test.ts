import { reverse } from "./reverse";

describe("reverse | Simple | 01", () => {
    test("one letter", () => {
        expect(reverse("a")).toStrictEqual("a");
        expect(reverse("1")).toStrictEqual("1");
        expect(reverse("#")).toStrictEqual("#");
    });

    test("many letters", () => {
        expect(reverse("arara")).toStrictEqual("arara");
        expect(reverse("hello programmer")).toStrictEqual("remmargorp olleh");
        expect(reverse("1123132 1231321 321")).toStrictEqual(
            "123 1231321 2313211",
        );
    });
});
