import { IFactory } from "../factories";
import { AndroidButton, AndroidInput } from "../products";

/**
 * Concrete Factories implement creation methods of the abstract
 * factory. Each concrete factory corresponds to a specific variant
 * of products and creates only those product variants.
 */
export class AndroidFactory implements IFactory {
    createButton() {
        return new AndroidButton();
    }
    createInput() {
        return new AndroidInput();
    }
}
