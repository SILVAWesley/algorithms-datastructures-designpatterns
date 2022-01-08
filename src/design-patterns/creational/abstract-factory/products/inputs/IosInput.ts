import { IInput } from "./IInput";

/**
 * Concrete Products are various implementations of abstract products,
 * grouped by variants. Each abstract product must be implemented in
 * all given variants.
 */
export class IosInput implements IInput {
    render(): string {
        return "Render ios input.";
    }
}
