import { StackNode } from "./stack-node";

/**
 * How would you design a stack which, in addition to push and pop, has a function min
 * which returns the minimum element? Push, pop and min should all operate in 0(1) time.
 *
 * Space: O(N)
 */
export class StackMin<T> {
    top?: StackNode<T>;
    minTop?: StackNode<T>;

    // O(1)
    peek() {
        return this.top?.value;
    }

    // O(1)
    isEmpty() {
        return !this.top;
    }

    // O(1)
    push(value: T) {
        const newTop = new StackNode<T>(value, this.top);
        this.top = newTop;

        if (!this.minTop || value <= this.minTop.value) {
            const newMin = new StackNode<T>(value, this.minTop);
            this.minTop = newMin;
        }
    }

    // O(1)
    min() {
        return this.minTop?.value;
    }

    // O(1)
    pop() {
        if (!this.top) return;

        const val = this.top.value;

        this.top = this.top.next;

        if (this.minTop?.value === val) {
            this.minTop = this.minTop.next;
        }

        return val;
    }
}
