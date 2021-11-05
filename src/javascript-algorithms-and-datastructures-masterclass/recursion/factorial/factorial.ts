/**
 * Write a function factorial which accepts a number and
 * returns the factorial of that number. A factorial is
 * the product of an integer and all the integers below
 * it. Factorial zero is always 1.
 */
export function factorial(num: number): number {
    if (num === 0) {
        return 1;
    }

    return num * factorial(num - 1);
}
