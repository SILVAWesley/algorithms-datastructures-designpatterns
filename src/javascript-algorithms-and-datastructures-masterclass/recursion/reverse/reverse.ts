/**
 * Write a recursive function called reverse which
 * accepts a string and return a new string in reverse.
 */
export function reverse(str: string): string {
    if (str.length === 1) {
        return str;
    }

    const newStr = str[str.length - 1] + reverse(str.slice(0, str.length - 1));
    return newStr;
}
