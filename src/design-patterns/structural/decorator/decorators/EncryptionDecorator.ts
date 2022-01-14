import { DataSourceDecorator } from "./DataSourceDecorator";
import { IDataSource } from "../IDataSource";

export class EncryptionDecorator extends DataSourceDecorator {
    constructor(source: IDataSource) {
        super(source);
    }

    writeData(data: string): void {
        this.source.writeData(data + " [encrypted]");
    }

    readData(): string {
        return this.source.readData() + " [decrypted]";
    }
}
