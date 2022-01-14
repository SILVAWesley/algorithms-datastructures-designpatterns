import { IDataSource } from "../IDataSource";

export abstract class DataSourceDecorator implements IDataSource {
    protected source: IDataSource;

    constructor(source: IDataSource) {
        this.source = source;
    }

    abstract writeData(data: string): void;
    abstract readData(): string;
}
