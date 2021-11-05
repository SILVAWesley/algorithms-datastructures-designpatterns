/**
 * Write a function called stringifyNumbers which takes in
 * an object and finds all of the values which are numbers
 * and converts them to strings. Recursion would be a great
 * way to solve this!
 */
export function stringifyNumbers(obj: Record<string, unknown>) {
    const newObj: Record<string, unknown> = {};

    for (const property of Object.keys(obj)) {
        const value = obj[property];

        if (typeof value === "object" && !Array.isArray(value)) {
            newObj[property] = stringifyNumbers(
                value as Record<string, unknown>,
            );
        } else if (typeof value === "number") {
            newObj[property] = value + "";
        } else {
            newObj[property] = value;
        }
    }

    return newObj;
}
