import { TreeType } from "./TreeType";

export class Tree {
    private x: number;
    private y: number;
    private type: TreeType;

    constructor(x: number, y: number, type: TreeType) {
        this.x = x;
        this.y = y;
        this.type = type;
    }

    draw(canvas: string): string {
        return this.type.draw(canvas, this.x, this.y);
    }
}
