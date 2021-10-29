import { DoublyLinkedList } from "./DoublyLinkedList";

describe("DoublyLinkedList | Simple | push | 01", () => {
    test("empty list", () => {
        const dll = new DoublyLinkedList();

        expect(dll.head).toBe(null);
        expect(dll.tail).toBe(null);
        expect(dll.length).toBe(0);
        expect(dll.toString()).toBe("[]");
    });

    test("many pushs", () => {
        const dll = new DoublyLinkedList();
        dll.push("hello");

        expect(dll.head?.value).toBe("hello");
        expect(dll.tail?.value).toBe("hello");
        expect(dll.length).toBe(1);
        expect(dll.toString()).toBe("[hello]");
        expect(dll.toReverseString()).toBe("[hello]");

        dll.push("world");

        expect(dll.head?.value).toBe("hello");
        expect(dll.tail?.value).toBe("world");
        expect(dll.length).toBe(2);
        expect(dll.toString()).toBe("[hello, world]");
        expect(dll.toReverseString()).toBe("[world, hello]");

        dll.push("!");

        expect(dll.head?.value).toBe("hello");
        expect(dll.tail?.value).toBe("!");
        expect(dll.length).toBe(3);
        expect(dll.toString()).toBe("[hello, world, !]");
        expect(dll.toReverseString()).toBe("[!, world, hello]");

        dll.push("good");

        expect(dll.head?.value).toBe("hello");
        expect(dll.tail?.value).toBe("good");
        expect(dll.length).toBe(4);
        expect(dll.toString()).toBe("[hello, world, !, good]");
        expect(dll.toReverseString()).toBe("[good, !, world, hello]");
    });
});

describe("DoublyLinkedList | Simple | toString | 01", () => {
    test("empty list", () => {
        const dll = new DoublyLinkedList();
        expect(dll.toString()).toBe("[]");
    });

    test("one element", () => {
        const dll = new DoublyLinkedList();
        dll.push(10);
        expect(dll.toString()).toBe("[10]");
    });

    test("many elements", () => {
        const dll = new DoublyLinkedList();
        dll.push("hello");
        dll.push("world");
        dll.push("!");
        dll.push("good");
        dll.push("programmer");
        expect(dll.toString()).toBe("[hello, world, !, good, programmer]");
    });
});

describe("DoublyLinkedList | Simple | toReverseString | 01", () => {
    test("empty list", () => {
        const dll = new DoublyLinkedList();
        expect(dll.toReverseString()).toBe("[]");
    });

    test("one element", () => {
        const dll = new DoublyLinkedList();
        dll.push(10);
        expect(dll.toReverseString()).toBe("[10]");
    });

    test("many elements", () => {
        const dll = new DoublyLinkedList();
        dll.push("hello");
        dll.push("world");
        dll.push("!");
        dll.push("good");
        dll.push("programmer");
        expect(dll.toReverseString()).toBe(
            "[programmer, good, !, world, hello]",
        );
    });
});

describe("DoublyLinkedList | Simple | pop | 01", () => {
    test("empty list", () => {
        const dll = new DoublyLinkedList();

        expect(dll.pop()).toBe(undefined);
        expect(dll.head).toBe(null);
        expect(dll.tail).toBe(null);
        expect(dll.length).toBe(0);
        expect(dll.toString()).toBe("[]");
    });

    test("many pops", () => {
        const dll = new DoublyLinkedList();

        dll.push(1);
        dll.push(2);
        dll.push(3);
        dll.push(4);
        dll.push(5);

        expect(dll.head?.value).toBe(1);
        expect(dll.tail?.value).toBe(5);
        expect(dll.length).toBe(5);

        expect(dll.pop()).toBe(5);
        expect(dll.head?.value).toBe(1);
        expect(dll.tail?.value).toBe(4);
        expect(dll.length).toBe(4);
        expect(dll.toString()).toBe("[1, 2, 3, 4]");
        expect(dll.toReverseString()).toBe("[4, 3, 2, 1]");

        expect(dll.pop()).toBe(4);
        expect(dll.head?.value).toBe(1);
        expect(dll.tail?.value).toBe(3);
        expect(dll.length).toBe(3);
        expect(dll.toString()).toBe("[1, 2, 3]");
        expect(dll.toReverseString()).toBe("[3, 2, 1]");

        expect(dll.pop()).toBe(3);
        expect(dll.head?.value).toBe(1);
        expect(dll.tail?.value).toBe(2);
        expect(dll.length).toBe(2);
        expect(dll.toString()).toBe("[1, 2]");
        expect(dll.toReverseString()).toBe("[2, 1]");

        expect(dll.pop()).toBe(2);
        expect(dll.head?.value).toBe(1);
        expect(dll.tail?.value).toBe(1);
        expect(dll.length).toBe(1);
        expect(dll.toString()).toBe("[1]");
        expect(dll.toReverseString()).toBe("[1]");

        expect(dll.pop()).toBe(1);
        expect(dll.head).toBe(null);
        expect(dll.tail).toBe(null);
        expect(dll.length).toBe(0);
        expect(dll.toString()).toBe("[]");
        expect(dll.toReverseString()).toBe("[]");
    });
});

describe("DoublyLinkedList | Simple | shift | 01", () => {
    test("empty list", () => {
        const dll = new DoublyLinkedList();

        expect(dll.shift()).toBe(undefined);
        expect(dll.head).toBe(null);
        expect(dll.tail).toBe(null);
        expect(dll.length).toBe(0);
        expect(dll.toString()).toBe("[]");
    });

    test("many shifts", () => {
        const dll = new DoublyLinkedList();

        dll.push(1);
        dll.push(2);
        dll.push(3);
        dll.push(4);
        dll.push(5);

        expect(dll.head?.value).toBe(1);
        expect(dll.tail?.value).toBe(5);
        expect(dll.length).toBe(5);

        expect(dll.shift()).toBe(1);
        expect(dll.head?.value).toBe(2);
        expect(dll.tail?.value).toBe(5);
        expect(dll.length).toBe(4);
        expect(dll.toString()).toBe("[2, 3, 4, 5]");
        expect(dll.toReverseString()).toBe("[5, 4, 3, 2]");

        expect(dll.shift()).toBe(2);
        expect(dll.head?.value).toBe(3);
        expect(dll.tail?.value).toBe(5);
        expect(dll.length).toBe(3);
        expect(dll.toString()).toBe("[3, 4, 5]");
        expect(dll.toReverseString()).toBe("[5, 4, 3]");

        expect(dll.shift()).toBe(3);
        expect(dll.head?.value).toBe(4);
        expect(dll.tail?.value).toBe(5);
        expect(dll.length).toBe(2);
        expect(dll.toString()).toBe("[4, 5]");
        expect(dll.toReverseString()).toBe("[5, 4]");

        expect(dll.shift()).toBe(4);
        expect(dll.head?.value).toBe(5);
        expect(dll.tail?.value).toBe(5);
        expect(dll.length).toBe(1);
        expect(dll.toString()).toBe("[5]");
        expect(dll.toReverseString()).toBe("[5]");

        expect(dll.shift()).toBe(5);
        expect(dll.head).toBe(null);
        expect(dll.tail).toBe(null);
        expect(dll.length).toBe(0);
        expect(dll.toString()).toBe("[]");
        expect(dll.toReverseString()).toBe("[]");
    });
});

describe("SinglyLinkedList | Simple | unshift | 01", () => {
    test("empty list", () => {
        const dll = new DoublyLinkedList();

        dll.unshift(1);
        expect(dll.head?.value).toBe(1);
        expect(dll.tail?.value).toBe(1);
        expect(dll.length).toBe(1);
        expect(dll.toString()).toBe("[1]");
    });

    test("many unshifts", () => {
        const dll = new DoublyLinkedList();

        dll.unshift(1);
        expect(dll.head?.value).toBe(1);
        expect(dll.tail?.value).toBe(1);
        expect(dll.length).toBe(1);
        expect(dll.toString()).toBe("[1]");
        expect(dll.toReverseString()).toBe("[1]");

        dll.unshift(2);
        expect(dll.head?.value).toBe(2);
        expect(dll.tail?.value).toBe(1);
        expect(dll.length).toBe(2);
        expect(dll.toString()).toBe("[2, 1]");
        expect(dll.toReverseString()).toBe("[1, 2]");

        dll.unshift(3);
        expect(dll.head?.value).toBe(3);
        expect(dll.tail?.value).toBe(1);
        expect(dll.length).toBe(3);
        expect(dll.toString()).toBe("[3, 2, 1]");
        expect(dll.toReverseString()).toBe("[1, 2, 3]");
    });
});

describe("DoublyLinkedList | Simple | get | 01", () => {
    test("empty list", () => {
        const dll = new DoublyLinkedList();

        expect(dll.get(0)).toBe(null);
        expect(dll.get(1)).toBe(null);
        expect(dll.head).toBe(null);
        expect(dll.tail).toBe(null);
        expect(dll.length).toBe(0);
        expect(dll.toString()).toBe("[]");
    });

    test("negative index", () => {
        const dll = new DoublyLinkedList();

        dll.push(1);

        expect(dll.get(-1)).toBe(null);
    });

    test("not existing index", () => {
        const dll = new DoublyLinkedList();

        dll.push(1);

        expect(dll.get(1)).toBe(null);
    });

    test("many gets on a big list", () => {
        const dll = new DoublyLinkedList();

        dll.push(1);
        dll.push(2);
        dll.push(3);
        dll.push(4);
        dll.push(5);

        expect(dll.get(-1)).toBe(null);
        expect(dll.get(0)?.value).toBe(1);
        expect(dll.get(1)?.value).toBe(2);
        expect(dll.get(2)?.value).toBe(3);
        expect(dll.get(3)?.value).toBe(4);
        expect(dll.get(4)?.value).toBe(5);
        expect(dll.get(5)).toBe(null);
    });
});

/*

describe("SinglyLinkedList | Simple | get | 01", () => {
    test("empty list", () => {
        const sll = new DoublyLinkedList();

        expect(sll.get(0)).toBe(null);
        expect(sll.get(1)).toBe(null);
        expect(sll.head).toBe(null);
        expect(sll.tail).toBe(null);
        expect(sll.length).toBe(0);
        expect(sll.toString()).toBe("[]");
    });

    test("negative index", () => {
        const sll = new DoublyLinkedList();

        sll.push(1);

        expect(sll.get(-1)).toBe(null);
    });

    test("not existing index", () => {
        const sll = new DoublyLinkedList();

        sll.push(1);

        expect(sll.get(1)).toBe(null);
    });

    test("many gets on a big list", () => {
        const sll = new DoublyLinkedList();

        sll.push(1);
        sll.push(2);
        sll.push(3);
        sll.push(4);
        sll.push(5);

        expect(sll.get(-1)).toBe(null);
        expect(sll.get(0)?.value).toBe(1);
        expect(sll.get(1)?.value).toBe(2);
        expect(sll.get(2)?.value).toBe(3);
        expect(sll.get(3)?.value).toBe(4);
        expect(sll.get(4)?.value).toBe(5);
        expect(sll.get(5)).toBe(null);
    });
});

describe("SinglyLinkedList | Simple | set | 01", () => {
    test("empty list", () => {
        const sll = new DoublyLinkedList();

        expect(sll.set(0, 10)).toBe(false);
        expect(sll.head).toBe(null);
        expect(sll.tail).toBe(null);
        expect(sll.length).toBe(0);
        expect(sll.toString()).toBe("[]");
    });

    test("negative index", () => {
        const sll = new DoublyLinkedList();

        sll.push(1);

        expect(sll.set(-1, 10)).toBe(false);
    });

    test("not existing index", () => {
        const sll = new DoublyLinkedList();

        sll.push(1);

        expect(sll.set(1, 10)).toBe(false);
    });

    test("many sets on a big list", () => {
        const sll = new DoublyLinkedList();

        sll.push(1);
        sll.push(2);
        sll.push(3);
        sll.push(4);
        sll.push(5);

        expect(sll.set(-1, 60)).toBe(false);

        expect(sll.set(0, 10)).toBe(true);
        expect(sll.get(0)?.value).toBe(10);

        expect(sll.set(1, 20)).toBe(true);
        expect(sll.get(1)?.value).toBe(20);

        expect(sll.set(2, 30)).toBe(true);
        expect(sll.get(2)?.value).toBe(30);

        expect(sll.set(3, 40)).toBe(true);
        expect(sll.get(3)?.value).toBe(40);

        expect(sll.set(4, 50)).toBe(true);
        expect(sll.get(4)?.value).toBe(50);

        expect(sll.set(5, 60)).toBe(false);
        expect(sll.get(5)).toBe(null);
    });
});

describe("SinglyLinkedList | Simple | insert | 01", () => {
    test("empty list", () => {
        const sll = new DoublyLinkedList();

        expect(sll.insert(0, 10)).toBe(true);
        expect(sll.head?.value).toBe(10);
        expect(sll.tail?.value).toBe(10);
        expect(sll.length).toBe(1);
        expect(sll.toString()).toBe("[10]");
    });

    test("negative index", () => {
        const sll = new DoublyLinkedList();

        sll.push(1);

        expect(sll.insert(-1, 10)).toBe(false);
    });

    test("not existing index", () => {
        const sll = new DoublyLinkedList();

        sll.push(1);

        expect(sll.insert(2, 10)).toBe(false);
    });

    test("many inserts", () => {
        const sll = new DoublyLinkedList();

        expect(sll.insert(0, 1)).toBe(true);
        expect(sll.get(0)?.value).toBe(1);
        expect(sll.head?.value).toBe(1);
        expect(sll.tail?.value).toBe(1);
        expect(sll.length).toBe(1);
        expect(sll.toString()).toBe("[1]");

        expect(sll.insert(0, 2)).toBe(true);
        expect(sll.get(0)?.value).toBe(2);
        expect(sll.head?.value).toBe(2);
        expect(sll.tail?.value).toBe(1);
        expect(sll.length).toBe(2);
        expect(sll.toString()).toBe("[2, 1]");

        expect(sll.insert(1, 3)).toBe(true);
        expect(sll.get(1)?.value).toBe(3);
        expect(sll.head?.value).toBe(2);
        expect(sll.tail?.value).toBe(1);
        expect(sll.length).toBe(3);
        expect(sll.toString()).toBe("[2, 3, 1]");

        expect(sll.insert(0, 4)).toBe(true);
        expect(sll.get(0)?.value).toBe(4);
        expect(sll.head?.value).toBe(4);
        expect(sll.tail?.value).toBe(1);
        expect(sll.length).toBe(4);
        expect(sll.toString()).toBe("[4, 2, 3, 1]");

        expect(sll.insert(4, 5)).toBe(true);
        expect(sll.get(4)?.value).toBe(5);
        expect(sll.head?.value).toBe(4);
        expect(sll.tail?.value).toBe(5);
        expect(sll.length).toBe(5);
        expect(sll.toString()).toBe("[4, 2, 3, 1, 5]");
    });
});

describe("SinglyLinkedList | Simple | remove | 01", () => {
    test("empty list", () => {
        const sll = new DoublyLinkedList();

        expect(sll.remove(0)).toBe(undefined);
        expect(sll.head).toBe(null);
        expect(sll.tail).toBe(null);
        expect(sll.length).toBe(0);
        expect(sll.toString()).toBe("[]");
    });

    test("negative index", () => {
        const sll = new DoublyLinkedList();

        sll.push(1);

        expect(sll.remove(-1)).toBe(undefined);
    });

    test("not existing index", () => {
        const sll = new DoublyLinkedList();

        sll.push(1);

        expect(sll.remove(2)).toBe(undefined);
    });

    test("many removes", () => {
        const sll = new DoublyLinkedList();

        sll.push(1);
        sll.push(2);
        sll.push(3);
        sll.push(4);
        sll.push(5);

        expect(sll.remove(0)).toBe(1);
        expect(sll.get(0)?.value).toBe(2);
        expect(sll.head?.value).toBe(2);
        expect(sll.tail?.value).toBe(5);
        expect(sll.length).toBe(4);
        expect(sll.toString()).toBe("[2, 3, 4, 5]");

        expect(sll.remove(2)).toBe(4);
        expect(sll.get(2)?.value).toBe(5);
        expect(sll.head?.value).toBe(2);
        expect(sll.tail?.value).toBe(5);
        expect(sll.length).toBe(3);
        expect(sll.toString()).toBe("[2, 3, 5]");

        expect(sll.remove(2)).toBe(5);
        expect(sll.get(2)).toBe(null);
        expect(sll.head?.value).toBe(2);
        expect(sll.tail?.value).toBe(3);
        expect(sll.length).toBe(2);
        expect(sll.toString()).toBe("[2, 3]");

        expect(sll.remove(0)).toBe(2);
        expect(sll.get(0)?.value).toBe(3);
        expect(sll.head?.value).toBe(3);
        expect(sll.tail?.value).toBe(3);
        expect(sll.length).toBe(1);
        expect(sll.toString()).toBe("[3]");

        expect(sll.remove(0)).toBe(3);
        expect(sll.get(0)).toBe(null);
        expect(sll.head).toBe(null);
        expect(sll.tail).toBe(null);
        expect(sll.length).toBe(0);
        expect(sll.toString()).toBe("[]");
    });
});

describe("SinglyLinkedList | Simple | reverse | 01", () => {
    test("empty list", () => {
        const sll = new DoublyLinkedList();

        sll.reverse();
        expect(sll.head).toBe(null);
        expect(sll.tail).toBe(null);
        expect(sll.length).toBe(0);
        expect(sll.toString()).toBe("[]");
    });

    test("one element reverse", () => {
        const sll = new DoublyLinkedList();

        sll.push(1);

        sll.reverse();
        expect(sll.head?.value).toBe(1);
        expect(sll.tail?.value).toBe(1);
        expect(sll.length).toBe(1);
        expect(sll.toString()).toBe("[1]");
    });

    test("two elements reverse", () => {
        const sll = new DoublyLinkedList();

        sll.push(1);
        sll.push(2);

        sll.reverse();
        expect(sll.head?.value).toBe(2);
        expect(sll.tail?.value).toBe(1);
        expect(sll.length).toBe(2);
        expect(sll.toString()).toBe("[2, 1]");
    });

    test("many elements reverse", () => {
        const sll = new DoublyLinkedList();

        sll.push(1);
        sll.push(2);
        sll.push(3);
        sll.push(4);
        sll.push(5);

        sll.reverse();
        expect(sll.head?.value).toBe(5);
        expect(sll.tail?.value).toBe(1);
        expect(sll.length).toBe(5);
        expect(sll.toString()).toBe("[5, 4, 3, 2, 1]");
    });
});

describe("SinglyLinkedList | Simple | toString | 01", () => {
    test("empty list", () => {
        const sll = new DoublyLinkedList();
        expect(sll.toString()).toBe("[]");
    });
    test("one element", () => {
        const sll = new DoublyLinkedList();
        sll.push(10);
        expect(sll.toString()).toBe("[10]");
    });
    test("many elements", () => {
        const sll = new DoublyLinkedList();
        sll.push("hello");
        sll.push("world");
        sll.push("!");
        sll.push("good");
        sll.push("programmer");
        expect(sll.toString()).toBe("[hello, world, !, good, programmer]");
    });
});*/
