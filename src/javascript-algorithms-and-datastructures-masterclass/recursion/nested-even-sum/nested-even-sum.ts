/**
 * Write a recursive function called nestedEvenSum.
 * Return the sum of all even numbers in an object
 * which may contain nested objects.
 */
export function nestedEvenSum(
    obj: Record<string, unknown | Record<string, unknown>>,
) {
    let sum = 0;

    for (const property of Object.keys(obj)) {
        const value = obj[property];

        if (typeof value === "object") {
            sum = nestedEvenSum(value as Record<string, unknown>) + sum;
        } else if (typeof value === "number" && value % 2 === 0) {
            sum += value;
        }
    }

    return sum;
}
