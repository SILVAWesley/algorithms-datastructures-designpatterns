import { IStrategy } from ".";

export class StrategyA implements IStrategy {
    execute(): string {
        return "executing strategy A";
    }
}
