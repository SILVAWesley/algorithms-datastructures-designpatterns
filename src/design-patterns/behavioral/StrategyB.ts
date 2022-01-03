import { IStrategy } from ".";

export class StrategyB implements IStrategy {
    execute(): string {
        return "executing strategy B";
    }
}
