import { IOrderItem } from "./IOrderItem";

export class Product implements IOrderItem {
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    calculatePrice(): number {
        return this.price;
    }

    showItems(): string {
        return `${this.name} | ${this.price}\n`;
    }
}
