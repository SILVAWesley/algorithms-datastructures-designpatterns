import { Device } from "./Device";

export class Tv implements Device {
    private enabled: boolean;
    private volume: number;
    private channel: number;

    constructor() {
        this.enabled = false;
        this.volume = 0;
        this.channel = 0;
    }

    isEnabled(): boolean {
        return this.enabled;
    }

    enable(): void {
        this.enabled = true;
    }

    disable(): void {
        this.enabled = false;
    }

    getVolume(): number {
        return this.volume;
    }

    setVolume(newVolume: number): void {
        this.volume = newVolume + 5;
    }

    getChannel(): number {
        return this.channel;
    }

    setChannel(newChannel: number): void {
        this.channel = newChannel;
    }
}
