import { CarBuilder } from "./builders";
import { Director } from "./directors";

describe("strategy | Simple | 01", () => {
    test("Create cars with director class", () => {
        const builder = new CarBuilder();
        const director = new Director();

        director.makeCheapCar(builder);
        expect(builder.getResult().calculatePrice()).toBe(1600);

        director.makeMediumCar(builder);
        expect(builder.getResult().calculatePrice()).toBe(3500);
    });

    test("Create without director class", () => {
        const builder = new CarBuilder();

        builder.setEngine("fast");
        builder.setSeats(2);
        builder.setGPS();
        builder.setTripComputer();

        const sportCar = builder.getResult();
        expect(sportCar.calculatePrice()).toBe(4200);
    });
});
