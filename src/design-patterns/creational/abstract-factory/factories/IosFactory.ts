import { IFactory } from "../factories";
import { IosButton, IosInput } from "../products";

/**
 * Concrete Factories implement creation methods of the abstract
 * factory. Each concrete factory corresponds to a specific variant
 * of products and creates only those product variants.
 */
export class IosFactory implements IFactory {
    createButton() {
        return new IosButton();
    }
    createInput() {
        return new IosInput();
    }
}
