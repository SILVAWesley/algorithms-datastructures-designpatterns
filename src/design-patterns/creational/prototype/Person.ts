import { Prototype } from "./Prototype";

export abstract class Person implements Prototype {
    private firstName: string;
    private lastName: string;

    constructor(person?: Person) {
        if (person) {
            this.firstName = person.firstName;
            this.lastName = person.lastName;
        } else {
            this.firstName = "";
            this.lastName = "";
        }
    }

    getFullName(): string {
        return this.firstName + this.lastName;
    }

    setFirstName(newFirstName: string): void {
        this.firstName = newFirstName;
    }

    setLastName(newLastName: string): void {
        this.lastName = newLastName;
    }

    abstract clone(): Person;
}
