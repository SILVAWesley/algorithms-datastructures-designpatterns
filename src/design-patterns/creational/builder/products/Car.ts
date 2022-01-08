import { TEngine } from "../other";

export class Car {
    private seats: number;
    private engine: TEngine;
    private tripComputer: boolean;
    private gps: boolean;

    constructor() {
        this.seats = 0;
        this.engine = "slow";
        this.tripComputer = false;
        this.gps = false;
    }

    setSeats(newSeats: number): void {
        this.seats = newSeats;
    }

    setEngine(newEngine: TEngine) {
        this.engine = newEngine;
    }

    setTripComputer(newTripComputer: boolean) {
        this.tripComputer = newTripComputer;
    }

    setGps(newGps: boolean) {
        this.gps = newGps;
    }

    calculatePrice(): number {
        let enginePrice = 1000;

        switch (this.engine) {
            case "slow":
                enginePrice = 1000;
                break;
            case "medium":
                enginePrice = 2000;
                break;
            case "fast":
                enginePrice = 3000;
                break;
        }

        return (
            this.seats * 300 +
            enginePrice +
            (this.tripComputer ? 300 : 0) +
            (this.gps ? 300 : 0)
        );
    }
}
