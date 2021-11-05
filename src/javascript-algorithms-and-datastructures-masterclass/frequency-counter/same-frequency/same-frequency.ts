/**
 * Write a function called sameFrequency. Given two
 * positive integers, find out if the two numbers
 * have the same frequency of digits.
 */
export function sameFrequency(number1: number, number2: number) {
    const number1Str = number1.toString();
    const number2Str = number2.toString();

    if (number1Str.length !== number2Str.length) {
        return false;
    }

    const letterCounter: { [key: string]: number } = {};

    for (let i = 0; i < number1Str.length; i++) {
        if (!letterCounter[number1Str[i]]) {
            letterCounter[number1Str[i]] = 0;
        }

        letterCounter[number1Str[i]]++;
    }

    for (let i = 0; i < number2Str.length; i++) {
        if (
            !letterCounter[number2Str[i]] ||
            letterCounter[number2Str[i]] - 1 < 0
        ) {
            return false;
        }

        letterCounter[number2Str[i]]--;
    }

    return true;
}
