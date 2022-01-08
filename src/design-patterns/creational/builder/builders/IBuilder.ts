import { Car } from "../products";
import { TEngine } from "../other";

export interface IBuilder {
    reset(): void;
    setSeats(num: number): void;
    setEngine(engine: TEngine): void;
    setTripComputer(): void;
    setGPS(): void;
    getResult(): Car;
}
