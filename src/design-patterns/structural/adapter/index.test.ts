import { TemperatureReporterAdapter } from "./TemperatureReporterAdapter";
import { TemperatureRecorder } from "./TemperatureRecorder";
import { TemperatureReporter } from "./TemperatureReporter";

describe("adapter | Simple | 01", () => {
    test("Create prototype", () => {
        const recorder = new TemperatureRecorder();

        const reporter = new TemperatureReporterAdapter();

        let i = 0;

        while (i < 1000) {
            const fTemperaturePreview = recorder.getTemperature();

            if (fTemperaturePreview > 95) {
                expect(reporter.reportWave(fTemperaturePreview)).toBe(
                    "Heat wave incoming...",
                );
            } else if (fTemperaturePreview < 32) {
                expect(reporter.reportWave(fTemperaturePreview)).toBe(
                    "Cold wave incoming...",
                );
            } else {
                expect(reporter.reportWave(fTemperaturePreview)).toBe(
                    "No heat waves detected",
                );
            }

            i++;
        }
    });
});
