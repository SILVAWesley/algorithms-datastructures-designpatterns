/**
 * Describe how you could use a single array to implement three stacks
 * Space: O(N)
 */
export class ThreeStacks<T> {
    innerArray: T[];
    lastIndexes = [-3, -2, -1];

    constructor() {
        this.innerArray = [];
    }

    // O(1)
    peek(stack: number) {
        if (stack < 0 || stack > 2) return;

        const index = this.lastIndexes[stack];

        if (index < 0) {
            return;
        }

        return this.innerArray[this.lastIndexes[stack]];
    }

    // O(1)
    push(value: T, stack: number) {
        if (stack < 0 || stack > 2) return false;

        const lastIndex = this.lastIndexes[stack];
        const newLastIndex = lastIndex + this.lastIndexes.length;

        this.innerArray[newLastIndex] = value;
        this.lastIndexes[stack] = newLastIndex;

        return true;
    }

    // O(1)
    isEmpty(stack: number) {
        if (stack < 0 || stack > 2) throw Error();

        const lastIndex = this.lastIndexes[stack];

        if (lastIndex < 0) return true;

        return false;
    }

    // O(1)
    pop(stack: number) {
        if (stack < 0 || stack > 2) return;

        const lastIndex = this.lastIndexes[stack];

        if (lastIndex < 0) return;

        const val = this.innerArray[lastIndex];

        this.lastIndexes[stack] -= 3;

        return val;
    }
}
