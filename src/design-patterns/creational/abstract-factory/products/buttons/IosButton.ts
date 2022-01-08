import { IButton } from "./IButton";

/**
 * Concrete Products are various implementations of abstract products,
 * grouped by variants. Each abstract product must be implemented in
 * all given variants.
 */
export class IosButton implements IButton {
    render(): string {
        return "Render ios button.";
    }
}
