import { Context } from "./Context";
import { StrategyA } from "./StrategyA";
import { StrategyB } from "./StrategyB";

describe("strategy | Simple | 01", () => {
    test("Strategy A", () => {
        const strategy = new StrategyA();

        const context = new Context(strategy);

        expect(context.execute()).toBe("executing strategy A");
    });

    test("Strategy B", () => {
        const strategy = new StrategyB();

        const context = new Context(strategy);

        expect(context.execute()).toBe("executing strategy B");
    });

    test("Dynamic Strategy", () => {
        const strategy = new StrategyB();
        const context = new Context(strategy);
        expect(context.execute()).toBe("executing strategy B");
        const strategy2 = new StrategyA();
        context.setStrategy(strategy2);
        expect(context.execute()).toBe("executing strategy A");
    });
});
