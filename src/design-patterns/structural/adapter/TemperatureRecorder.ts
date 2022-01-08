export class TemperatureRecorder {
    /* WORKS IN FARENHEIT */
    getTemperature(): number {
        return Math.ceil(Math.random() * 100 + 30);
    }
}
