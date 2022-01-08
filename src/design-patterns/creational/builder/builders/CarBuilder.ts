import { Car } from "../products";
import { IBuilder } from "./IBuilder";
import { TEngine } from "../other";

export class CarBuilder implements IBuilder {
    car: Car;

    constructor() {
        this.car = new Car();
    }

    getResult(): Car {
        return this.car;
    }

    reset(): void {
        this.car = new Car();
    }

    setSeats(seats: number): void {
        this.car.setSeats(seats);
    }
    setEngine(engine: TEngine): void {
        this.car.setEngine(engine);
    }
    setTripComputer(): void {
        this.car.setTripComputer(true);
    }
    setGPS(): void {
        this.car.setGps(true);
    }
}
