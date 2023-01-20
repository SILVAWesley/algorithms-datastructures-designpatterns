import { partition } from "./partition";
import { SinglyLinkedList } from "../../datastructures";

describe("partition", () => {
    test("partition | question example", () => {
        const list = new SinglyLinkedList<number>();

        list.push(3);
        list.push(5);
        list.push(8);
        list.push(5);
        list.push(10);
        list.push(2);
        list.push(1);

        partition(list, 5);

        expect(list.tail?.value).toBe(10);

        expect(list.toString()).toBe("[3, 1, 2, 5, 8, 5, 10]");
    });
});
