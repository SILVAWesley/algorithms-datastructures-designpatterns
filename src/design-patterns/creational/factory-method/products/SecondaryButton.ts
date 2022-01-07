import { IButton } from "./IButton";

/**
 * Concrete Products are different implementations of the
 * product interface.
 */
export class SecondaryButton implements IButton {
    render(): string {
        return "Secondary button rendered";
    }
}
