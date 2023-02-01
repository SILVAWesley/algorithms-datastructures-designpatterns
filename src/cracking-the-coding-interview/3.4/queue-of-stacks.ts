import { Stack } from "../../datastructures";

/**
 * Implement a MyQueue class which implements a queue using two stacks.
 */
export class QueueOfStacks<T> {
    inStack: Stack<T> = new Stack<T>();
    outStack: Stack<T> = new Stack<T>();

    // O(1)
    add(value: T) {
        this.inStack.push(value);
    }

    // O(N)
    remove() {
        if (this.isEmpty()) return;

        if (!this.outStack.peek()) {
            while (this.inStack.peek()) {
                this.outStack.push(this.inStack.pop() as T);
            }
        }

        return this.outStack.pop();
    }

    // O(N)
    peek() {
        if (this.isEmpty()) return;

        if (!this.outStack.peek()) {
            // Move all items to the outStack
            while (this.inStack.peek()) {
                this.outStack.push(this.inStack.pop() as T);
            }
        }

        return this.outStack.peek();
    }

    // O(1)
    isEmpty() {
        return !this.inStack.peek() && !this.outStack.peek();
    }
}
