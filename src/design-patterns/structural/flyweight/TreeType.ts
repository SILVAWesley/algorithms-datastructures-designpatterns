export class TreeType {
    private name: string;
    private color: string;
    private texture: string;

    constructor(name: string, color: string, texture: string) {
        this.name = name;
        this.color = color;
        this.texture = texture;
    }

    getName(): string {
        return this.name;
    }

    getColor(): string {
        return this.color;
    }

    getTexture(): string {
        return this.texture;
    }

    draw(canvas: string, x: number, y: number): string {
        return `Drawing tree ${this.color} ${this.name} at ${x}, ${y} in canvas ${canvas}: ${this.texture}`;
    }
}
