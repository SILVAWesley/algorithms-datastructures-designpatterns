import { IStrategy } from "./IStrategy";

export class Context {
    constructor(private strategy: IStrategy) {}

    public setStrategy(strategy: IStrategy): void {
        this.strategy = strategy;
    }

    public execute(): string {
        return this.strategy.execute();
    }
}
