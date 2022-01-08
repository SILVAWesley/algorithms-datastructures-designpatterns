import { Person } from "./Person";

export class DetailedPerson extends Person {
    private age: number;

    constructor(detailedPerson?: DetailedPerson) {
        super(detailedPerson);

        if (detailedPerson) {
            this.age = detailedPerson.age;
        } else {
            this.age = 0;
        }
    }

    getAge(): number {
        return this.age;
    }

    setAge(newAge: number): void {
        this.age = newAge;
    }

    clone(): DetailedPerson {
        return new DetailedPerson(this);
    }
}
