import { IOrderItem } from "./IOrderItem";

export class Pkg implements IOrderItem {
    private items: IOrderItem[];

    constructor() {
        this.items = [];
    }

    calculatePrice(): number {
        let price = 0;

        for (const item of this.items) {
            price += item.calculatePrice();
        }

        return price;
    }

    addProduct(item: IOrderItem): void {
        this.items.push(item);
    }

    showItems(): string {
        let result = "";

        for (const product of this.items) {
            result += product.showItems();
        }

        return result;
    }
}
