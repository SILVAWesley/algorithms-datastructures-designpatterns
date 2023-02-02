import { SinglyLinkedList } from "../../datastructures";

export type TAnimal = {
    name: string;
    type: "cat" | "dog";
};

/**
 * An animal shelter, which holds only dogs and cats, operates on a strictly"first in, first
 * out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter,
 * or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of
 * that type). They cannot select which specific animal they would like. Create the data structures to
 * maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog,
 * and dequeueCat. You may use the built-in Linked list data structure.
 */
export class AnimalShelter {
    animals: SinglyLinkedList<TAnimal>;

    constructor() {
        this.animals = new SinglyLinkedList<TAnimal>();
    }

    // O(1)
    enqueue(animal: TAnimal) {
        this.animals.push(animal);
    }

    // O(1)
    dequeueAny() {
        return this.animals.shift();
    }

    // O(N)
    dequeueDog() {
        return this.dequeueType("dog");
    }

    // O(N)
    dequeueCat() {
        return this.dequeueType("cat");
    }

    dequeueType(animalType: "cat" | "dog") {
        if (!this.animals.head) return;

        if (this.animals.head.value.type === animalType) {
            const val = this.animals.head.value;
            this.animals.head = this.animals.head.next;
            this.animals.length--;

            if (!this.animals.head) {
                this.animals.tail = null;
            }

            return val;
        }

        let currentNode = this.animals.head;

        while (currentNode?.next) {
            const nextNode = currentNode.next;

            if (nextNode?.value.type === animalType) {
                const val = nextNode.value;
                currentNode.next = nextNode.next;
                this.animals.length--;

                if (!currentNode.next) {
                    this.animals.tail = null;
                }

                return val;
            }

            currentNode = currentNode.next;
        }
    }

    toString() {
        let currentNode = this.animals.head;

        let res = "[";

        while (currentNode?.next) {
            res += `${currentNode.value.name}, `;
            console.log(res);
            currentNode = currentNode.next;
        }

        if (currentNode) {
            res += currentNode.value.name;
        }

        res += "]";

        return res;
    }
}
