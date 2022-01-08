import { ITemperatureReporter } from "./ITemperatureReporter";

export class TemperatureReporter implements ITemperatureReporter {
    /* WORKS IN CELCIUS */
    reportWave(tempPreview: number): string {
        if (tempPreview > 35) {
            return "Heat wave incoming...";
        } else if (tempPreview < 0) {
            return "Cold wave incoming...";
        }

        return "No heat waves detected";
    }
}
