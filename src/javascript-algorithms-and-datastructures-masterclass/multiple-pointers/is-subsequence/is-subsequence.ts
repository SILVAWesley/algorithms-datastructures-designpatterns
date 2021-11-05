/**
 * Write a function called isSubsequence which takes in
 * two strings and checks whether the characters in the
 * first string form a subsequence of the characters in
 * the second string. In other words, the function should
 * check whether the characters in the first string appear
 * somewhere in the second string, without their order
 * changing.
 */
export function isSubsequence(str1: string, str2: string) {
    if (str1.length > str2.length) {
        return false;
    }

    let str1I = 0;
    let str2I = 0;

    while (str2I < str2.length) {
        if (str2[str2I] === str1[str1I]) {
            str1I++;
        }

        if (str1I >= str1.length) {
            return true;
        }

        str2I++;
    }

    return false;
}
