import { IInput } from "./IInput";

/**
 * Concrete Products are various implementations of abstract products,
 * grouped by variants. Each abstract product must be implemented in
 * all given variants.
 */
export class AndroidInput implements IInput {
    render(): string {
        return "Render android input.";
    }
}
