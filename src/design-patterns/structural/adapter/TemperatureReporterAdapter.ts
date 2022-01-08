import { ITemperatureReporter } from "./ITemperatureReporter";
import { TemperatureReporter } from "./TemperatureReporter";

export class TemperatureReporterAdapter implements ITemperatureReporter {
    private reporter: TemperatureReporter;

    constructor() {
        this.reporter = new TemperatureReporter();
    }

    /* WORKS IN FARENHEIT */
    reportWave(tempPreview: number): string {
        return this.reporter.reportWave((tempPreview - 32) * (5 / 9));
    }
}
