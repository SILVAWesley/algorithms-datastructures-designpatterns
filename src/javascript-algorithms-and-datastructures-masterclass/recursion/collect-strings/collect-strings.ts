/**
 * Write a function called collectStrings which accepts
 * an object and returns an array of all the values in
 * the object that have a typeof string.
 */
export function collectStrings(obj: Record<string, unknown>) {
    let array: unknown[] = [];

    for (const property of Object.keys(obj)) {
        const value = obj[property];

        if (typeof value === "object" && !Array.isArray(value)) {
            array = array.concat(
                collectStrings(value as Record<string, unknown>),
            );
        } else if (typeof value === "string") {
            console.log(value);
            array.push(value);
        }
    }

    return array;
}
