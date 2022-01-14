import { IDataSource } from "../IDataSource";

export class FileDataSource implements IDataSource {
    private name: string;
    private content: string;

    constructor(name: string) {
        this.name = name;
        this.content = "";
    }

    getName(): string {
        return this.name;
    }

    writeData(data: string): void {
        this.content = data;
    }

    readData(): string {
        return this.content;
    }
}
