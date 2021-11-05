/**
 * Implement a function called, areThereDuplicates which
 * accepts a variable number of arguments, and checks
 * whether there are any duplicates among the arguments
 * passed in. You can solve this using  the frequency
 * counter pattern OR the multiple pointers pattern.
 */
export function areThereDuplicates(...args: unknown[]) {
    const sortedArgs = args.sort();

    for (let i = 1; i < sortedArgs.length; i++) {
        if (sortedArgs[i] === sortedArgs[i - 1]) {
            return true;
        }
    }

    return false;
}
