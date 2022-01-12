import { Device } from "../implementations";

export class Remote {
    private device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    togglePower(): void {
        if (this.device.isEnabled()) {
            this.device.disable();
        } else {
            this.device.enable();
        }
    }

    volumeDown(): void {
        this.device.setVolume(this.device.getVolume() - 1);
    }

    volumeUp(): void {
        this.device.setVolume(this.device.getVolume() + 1);
    }
}
