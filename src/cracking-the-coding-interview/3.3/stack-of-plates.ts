export class StackOfPlates<T> {
    stacks: T[][];
    threshold: number;

    constructor(threshold: number) {
        this.stacks = [];
        this.threshold = threshold;
    }

    peek() {
        if (this.stacks.length === 0) return;
        const lastStack = this.stacks[this.stacks.length - 1];
        return lastStack[lastStack.length - 1];
    }

    isEmpty() {
        return this.stacks.length === 0;
    }

    push(value: T) {
        let lastStack = this.stacks[this.stacks.length - 1];

        if (!lastStack || lastStack.length >= this.threshold) {
            lastStack = [];
            this.stacks.push(lastStack);
        }

        lastStack.push(value);
    }

    pop() {
        const lastStack = this.stacks[this.stacks.length - 1];

        if (!lastStack) return;

        const val = lastStack[lastStack.length - 1];
        lastStack.splice(-1, 1);

        if (lastStack.length === 0) {
            this.stacks.splice(-1, 1);
        }

        return val;
    }

    popAt(stackIndex: number) {
        if (stackIndex < 0 || stackIndex >= this.stacks.length) return;

        const stack = this.stacks[stackIndex];

        const val = stack[stack.length - 1];

        stack.splice(-1, 1);

        if (stack.length === 0) {
            this.stacks.splice(stackIndex, 1);
        }

        return val;
    }
}
