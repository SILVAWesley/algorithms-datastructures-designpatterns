import { DataSourceDecorator } from "./DataSourceDecorator";
import { IDataSource } from "../IDataSource";

export class CompressionDecorator extends DataSourceDecorator {
    constructor(source: IDataSource) {
        super(source);
    }

    writeData(data: string): void {
        this.source.writeData(data + " [compressed]");
    }

    readData(): string {
        return this.source.readData() + " [decompressed]";
    }
}
