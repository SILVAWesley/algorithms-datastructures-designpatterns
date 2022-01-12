export interface Device {
    isEnabled(): boolean;
    enable(): void;
    disable(): void;
    getVolume(): number;
    setVolume(newVolume: number): void;
    getChannel(): number;
    setChannel(newChannel: number): void;
}
