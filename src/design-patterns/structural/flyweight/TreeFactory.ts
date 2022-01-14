import { TreeType } from "./TreeType";

export class TreeFactory {
    private static treeTypes: TreeType[] = [];

    static getTreeType(name: string, color: string, texture: string): TreeType {
        let tree = TreeFactory.treeTypes.find(
            (type) =>
                type.getName() === name &&
                type.getColor() === color &&
                type.getTexture() === texture,
        );

        if (!tree) {
            tree = new TreeType(name, color, texture);
            TreeFactory.treeTypes.push(tree);
        }

        return tree;
    }
}
