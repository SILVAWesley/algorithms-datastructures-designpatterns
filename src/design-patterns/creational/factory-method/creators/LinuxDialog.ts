import { Dialog } from "./Dialog";
import { SecondaryButton } from "../products";

/**
 * Concrete Creators override the base factory method so it returns
 * a different type of product.
 * Note that the factory method doesn’t have to create new instances
 * all the time. It can also return existing objects from a cache,
 * an object pool, or another source.
 */
export class LinuxDialog extends Dialog {
    createButton() {
        return new SecondaryButton();
    }
}
