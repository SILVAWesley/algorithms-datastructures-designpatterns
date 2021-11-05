/**
 * Write a recursive function called isPalindrome
 * which returns true if the string passed to it is
 * a palindrome (reads the same forward and backward).
 * Otherwise it returns false.
 */
export function isPalindrome(str: string) {
    return isPalindromeHelper(str, 0, str.length - 1);
}

function isPalindromeHelper(
    str: string,
    lowIndex: number,
    highIndex: number,
): boolean {
    if (str[lowIndex] !== str[highIndex]) {
        return false;
    }

    if (lowIndex >= highIndex) {
        return true;
    }

    return isPalindromeHelper(str, lowIndex + 1, highIndex - 1);
}
