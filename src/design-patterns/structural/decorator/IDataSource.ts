export interface IDataSource {
    writeData(data: string): void;
    readData(): string;
}
