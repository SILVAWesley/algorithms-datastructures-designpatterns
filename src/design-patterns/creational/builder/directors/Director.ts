import { IBuilder } from "../builders";

export class Director {
    makeCheapCar(builder: IBuilder): void {
        builder.setSeats(2);
        builder.setEngine("slow");
    }

    makeMediumCar(builder: IBuilder): void {
        builder.setSeats(4);
        builder.setEngine("medium");
        builder.setGPS();
    }

    makeExpensiveCar(builder: IBuilder): void {
        builder.setSeats(4);
        builder.setEngine("fast");
        builder.setGPS();
        builder.setTripComputer();
    }
}
