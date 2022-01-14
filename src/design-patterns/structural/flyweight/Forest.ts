import { Tree } from "./Tree";
import { TreeFactory } from "./TreeFactory";

export class Forest {
    trees: Tree[];

    constructor() {
        this.trees = [];
    }

    plantTree(
        x: number,
        y: number,
        name: string,
        color: string,
        texture: string,
    ): Tree {
        const treeType = TreeFactory.getTreeType(name, color, texture);

        const newTree = new Tree(x, y, treeType);
        this.trees.push(newTree);
        return newTree;
    }

    draw(canvas: string) {
        for (const tree of this.trees) {
            return tree.draw(canvas);
        }
    }
}
