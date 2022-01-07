import { IButton } from "./IButton";

/**
 * Concrete Products are different implementations of the
 * product interface.
 */
export class PrimaryButton implements IButton {
    render(): string {
        return "Primary button rendered";
    }
}
