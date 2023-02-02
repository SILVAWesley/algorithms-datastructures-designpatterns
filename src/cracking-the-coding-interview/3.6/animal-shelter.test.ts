import { AnimalShelter } from "./animal-shelter";

describe("animal-shelter", () => {
    test("animal-shelter | test enqueue", () => {
        const shelter = new AnimalShelter();

        expect(shelter.toString()).toBe("[]");

        shelter.enqueue({ name: "John", type: "dog" });
        expect(shelter.toString()).toBe("[John]");
        shelter.enqueue({ name: "Garfield", type: "cat" });
        expect(shelter.toString()).toBe("[John, Garfield]");
    });

    test("animal-shelter | test dequeueAny", () => {
        const shelter = new AnimalShelter();

        expect(shelter.toString()).toBe("[]");

        shelter.enqueue({ name: "John", type: "dog" });
        shelter.enqueue({ name: "Garfield", type: "cat" });
        shelter.enqueue({ name: "Bibo", type: "dog" });
        shelter.enqueue({ name: "Toto", type: "dog" });
        shelter.enqueue({ name: "Polar", type: "cat" });
        shelter.enqueue({ name: "Lince", type: "cat" });
        shelter.enqueue({ name: "Marley", type: "dog" });

        expect(shelter.toString()).toBe(
            "[John, Garfield, Bibo, Toto, Polar, Lince, Marley]",
        );

        expect(shelter.dequeueAny()?.name).toBe("John");
        expect(shelter.dequeueAny()?.name).toBe("Garfield");
        expect(shelter.dequeueAny()?.name).toBe("Bibo");
        expect(shelter.dequeueAny()?.name).toBe("Toto");
        expect(shelter.dequeueAny()?.name).toBe("Polar");
        expect(shelter.dequeueAny()?.name).toBe("Lince");
        expect(shelter.dequeueAny()?.name).toBe("Marley");
        expect(shelter.dequeueAny()?.name).toBeUndefined();
    });

    test("animal-shelter | test dequeueDog and dequeueCat", () => {
        const shelter = new AnimalShelter();

        expect(shelter.toString()).toBe("[]");

        shelter.enqueue({ name: "John", type: "dog" });
        shelter.enqueue({ name: "Garfield", type: "cat" });
        shelter.enqueue({ name: "Bibo", type: "dog" });
        shelter.enqueue({ name: "Toto", type: "dog" });
        shelter.enqueue({ name: "Polar", type: "cat" });
        shelter.enqueue({ name: "Lince", type: "cat" });
        shelter.enqueue({ name: "Marley", type: "dog" });

        expect(shelter.toString()).toBe(
            "[John, Garfield, Bibo, Toto, Polar, Lince, Marley]",
        );

        expect(shelter.dequeueCat()?.name).toBe("Garfield");
        expect(shelter.dequeueCat()?.name).toBe("Polar");
        expect(shelter.dequeueDog()?.name).toBe("John");
        expect(shelter.dequeueDog()?.name).toBe("Bibo");
        expect(shelter.dequeueCat()?.name).toBe("Lince");
        expect(shelter.dequeueDog()?.name).toBe("Toto");
        expect(shelter.dequeueDog()?.name).toBe("Marley");
        expect(shelter.dequeueDog()?.name).toBeUndefined();
        expect(shelter.dequeueCat()?.name).toBeUndefined();
    });
});
