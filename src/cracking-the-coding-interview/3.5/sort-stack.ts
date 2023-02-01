import { Stack } from "../../datastructures";

/*
 * Write a program to sort a stack such that the smallest items are on the top. You can use
 * an additional temporary stack, but you may not copy the elements into any other data structure
 * (such as an array). The stack supports the following operations: push, pop, peek, and is Empty
 * Time: O(N^2) Space: O(N)
 */
export function sortStack(s1: Stack<number>) {
    if (!s1.peek()) return;

    const s2 = new Stack<number>();

    while (s1.peek()) {
        const temp = s1.pop() as number;
        let counter = 0;

        while (s2.peek() && (s2.peek() as number) > temp) {
            s1.push(s2.pop() as number);
            counter++;
        }

        s2.push(temp);

        while (counter > 0) {
            s2.push(s1.pop() as number);
            counter--;
        }
    }

    while (s2.peek()) {
        s1.push(s2.pop() as number);
    }
}
