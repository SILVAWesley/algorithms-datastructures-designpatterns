import { DetailedPerson } from "./DetailedPerson";

describe("prototype | Simple | 01", () => {
    test("Create prototype", () => {
        const person = new DetailedPerson();

        person.setAge(30);
        person.setFirstName("Louis");
        person.setLastName("Benjamin");

        expect(person.getFullName()).toBe("LouisBenjamin");
        expect(person.getAge()).toBe(30);

        const person2 = person.clone();

        expect(person2.getFullName()).toBe("LouisBenjamin");
        expect(person2.getAge()).toBe(30);

        person2.setAge(45);

        expect(person2.getFullName()).toBe("LouisBenjamin");
        expect(person2.getAge()).toBe(45);

        expect(person.getFullName()).toBe("LouisBenjamin");
        expect(person.getAge()).toBe(30);
    });
});
