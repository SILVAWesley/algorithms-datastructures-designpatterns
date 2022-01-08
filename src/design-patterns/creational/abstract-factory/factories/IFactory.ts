import { IButton, IInput } from "../products";

/**
 * The Abstract Factory interface declares a set of methods for
 * creating each of the abstract products.
 */
export interface IFactory {
    createButton(): IButton;
    createInput(): IInput;
}
