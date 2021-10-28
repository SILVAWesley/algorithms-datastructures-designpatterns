import { SinglyLinkedList } from "./SinglyLinkedList";

describe("SinglyLinkedList | Simple | push | 01", () => {
    test("empty list", () => {
        const sll = new SinglyLinkedList();

        expect(sll.head).toBe(null);
        expect(sll.tail).toBe(null);
        expect(sll.length).toBe(0);
        expect(sll.toString()).toBe("[]");
    });

    test("many pushs", () => {
        const sll = new SinglyLinkedList();
        sll.push("hello");

        expect(sll.head?.value).toBe("hello");
        expect(sll.tail?.value).toBe("hello");
        expect(sll.length).toBe(1);
        expect(sll.toString()).toBe("[hello]");

        sll.push("world");

        expect(sll.head?.value).toBe("hello");
        expect(sll.tail?.value).toBe("world");
        expect(sll.length).toBe(2);
        expect(sll.toString()).toBe("[hello, world]");

        sll.push("!");

        expect(sll.head?.value).toBe("hello");
        expect(sll.tail?.value).toBe("!");
        expect(sll.length).toBe(3);
        expect(sll.toString()).toBe("[hello, world, !]");

        sll.push("good");

        expect(sll.head?.value).toBe("hello");
        expect(sll.tail?.value).toBe("good");
        expect(sll.length).toBe(4);
        expect(sll.toString()).toBe("[hello, world, !, good]");
    });
});

describe("SinglyLinkedList | Simple | pop | 01", () => {
    test("empty list", () => {
        const sll = new SinglyLinkedList();

        expect(sll.pop()).toBe(undefined);
        expect(sll.head).toBe(null);
        expect(sll.tail).toBe(null);
        expect(sll.length).toBe(0);
        expect(sll.toString()).toBe("[]");
    });

    test("many pops", () => {
        const sll = new SinglyLinkedList();

        sll.push(1);
        sll.push(2);
        sll.push(3);
        sll.push(4);
        sll.push(5);

        expect(sll.head?.value).toBe(1);
        expect(sll.tail?.value).toBe(5);
        expect(sll.length).toBe(5);

        expect(sll.pop()).toBe(5);
        expect(sll.head?.value).toBe(1);
        expect(sll.tail?.value).toBe(4);
        expect(sll.length).toBe(4);
        expect(sll.toString()).toBe("[1, 2, 3, 4]");

        expect(sll.pop()).toBe(4);
        expect(sll.head?.value).toBe(1);
        expect(sll.tail?.value).toBe(3);
        expect(sll.length).toBe(3);
        expect(sll.toString()).toBe("[1, 2, 3]");

        expect(sll.pop()).toBe(3);
        expect(sll.head?.value).toBe(1);
        expect(sll.tail?.value).toBe(2);
        expect(sll.length).toBe(2);
        expect(sll.toString()).toBe("[1, 2]");

        expect(sll.pop()).toBe(2);
        expect(sll.head?.value).toBe(1);
        expect(sll.tail?.value).toBe(1);
        expect(sll.length).toBe(1);
        expect(sll.toString()).toBe("[1]");

        expect(sll.pop()).toBe(1);
        expect(sll.head).toBe(null);
        expect(sll.tail).toBe(null);
        expect(sll.length).toBe(0);
        expect(sll.toString()).toBe("[]");
    });
});

describe("SinglyLinkedList | Simple | shift | 01", () => {
    test("empty list", () => {
        const sll = new SinglyLinkedList();

        expect(sll.shift()).toBe(undefined);
        expect(sll.head).toBe(null);
        expect(sll.tail).toBe(null);
        expect(sll.length).toBe(0);
        expect(sll.toString()).toBe("[]");
    });

    test("many shifts", () => {
        const sll = new SinglyLinkedList();

        sll.push(1);
        sll.push(2);
        sll.push(3);
        sll.push(4);
        sll.push(5);

        expect(sll.head?.value).toBe(1);
        expect(sll.tail?.value).toBe(5);
        expect(sll.length).toBe(5);

        expect(sll.shift()).toBe(1);
        expect(sll.head?.value).toBe(2);
        expect(sll.tail?.value).toBe(5);
        expect(sll.length).toBe(4);
        expect(sll.toString()).toBe("[2, 3, 4, 5]");

        expect(sll.shift()).toBe(2);
        expect(sll.head?.value).toBe(3);
        expect(sll.tail?.value).toBe(5);
        expect(sll.length).toBe(3);
        expect(sll.toString()).toBe("[3, 4, 5]");

        expect(sll.shift()).toBe(3);
        expect(sll.head?.value).toBe(4);
        expect(sll.tail?.value).toBe(5);
        expect(sll.length).toBe(2);
        expect(sll.toString()).toBe("[4, 5]");

        expect(sll.shift()).toBe(4);
        expect(sll.head?.value).toBe(5);
        expect(sll.tail?.value).toBe(5);
        expect(sll.length).toBe(1);
        expect(sll.toString()).toBe("[5]");

        expect(sll.shift()).toBe(5);
        expect(sll.head).toBe(null);
        expect(sll.tail).toBe(null);
        expect(sll.length).toBe(0);
        expect(sll.toString()).toBe("[]");
    });
});

describe("SinglyLinkedList | Simple | unshift | 01", () => {
    test("empty list", () => {
        const sll = new SinglyLinkedList();

        sll.unshift(1);
        expect(sll.head?.value).toBe(1);
        expect(sll.tail?.value).toBe(1);
        expect(sll.length).toBe(1);
        expect(sll.toString()).toBe("[1]");
    });

    test("many unshifts", () => {
        const sll = new SinglyLinkedList();

        sll.unshift(1);
        expect(sll.head?.value).toBe(1);
        expect(sll.tail?.value).toBe(1);
        expect(sll.length).toBe(1);
        expect(sll.toString()).toBe("[1]");

        sll.unshift(2);
        expect(sll.head?.value).toBe(2);
        expect(sll.tail?.value).toBe(1);
        expect(sll.length).toBe(2);
        expect(sll.toString()).toBe("[2, 1]");

        sll.unshift(3);
        expect(sll.head?.value).toBe(3);
        expect(sll.tail?.value).toBe(1);
        expect(sll.length).toBe(3);
        expect(sll.toString()).toBe("[3, 2, 1]");
    });
});

describe("SinglyLinkedList | Simple | get | 01", () => {
    test("empty list", () => {
        const sll = new SinglyLinkedList();

        expect(sll.get(0)).toBe(null);
        expect(sll.get(1)).toBe(null);
        expect(sll.head).toBe(null);
        expect(sll.tail).toBe(null);
        expect(sll.length).toBe(0);
        expect(sll.toString()).toBe("[]");
    });

    test("negative index", () => {
        const sll = new SinglyLinkedList();

        sll.push(1);

        expect(sll.get(-1)).toBe(null);
    });

    test("not existing index", () => {
        const sll = new SinglyLinkedList();

        sll.push(1);

        expect(sll.get(1)).toBe(null);
    });

    test("many gets on a big list", () => {
        const sll = new SinglyLinkedList();

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
        const sll = new SinglyLinkedList();

        expect(sll.set(0, 10)).toBe(false);
        expect(sll.head).toBe(null);
        expect(sll.tail).toBe(null);
        expect(sll.length).toBe(0);
        expect(sll.toString()).toBe("[]");
    });

    test("negative index", () => {
        const sll = new SinglyLinkedList();

        sll.push(1);

        expect(sll.set(-1, 10)).toBe(false);
    });

    test("not existing index", () => {
        const sll = new SinglyLinkedList();

        sll.push(1);

        expect(sll.set(1, 10)).toBe(false);
    });

    test("many sets on a big list", () => {
        const sll = new SinglyLinkedList();

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
        const sll = new SinglyLinkedList();

        expect(sll.insert(0, 10)).toBe(true);
        expect(sll.head?.value).toBe(10);
        expect(sll.tail?.value).toBe(10);
        expect(sll.length).toBe(1);
        expect(sll.toString()).toBe("[10]");
    });

    test("negative index", () => {
        const sll = new SinglyLinkedList();

        sll.push(1);

        expect(sll.insert(-1, 10)).toBe(false);
    });

    test("not existing index", () => {
        const sll = new SinglyLinkedList();

        sll.push(1);

        expect(sll.insert(2, 10)).toBe(false);
    });

    test("many inserts", () => {
        const sll = new SinglyLinkedList();

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
        const sll = new SinglyLinkedList();

        expect(sll.remove(0)).toBe(undefined);
        expect(sll.head).toBe(null);
        expect(sll.tail).toBe(null);
        expect(sll.length).toBe(0);
        expect(sll.toString()).toBe("[]");
    });

    test("negative index", () => {
        const sll = new SinglyLinkedList();

        sll.push(1);

        expect(sll.remove(-1)).toBe(undefined);
    });

    test("not existing index", () => {
        const sll = new SinglyLinkedList();

        sll.push(1);

        expect(sll.remove(2)).toBe(undefined);
    });

    test("many removes", () => {
        const sll = new SinglyLinkedList();

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
        const sll = new SinglyLinkedList();

        sll.reverse();
        expect(sll.head).toBe(null);
        expect(sll.tail).toBe(null);
        expect(sll.length).toBe(0);
        expect(sll.toString()).toBe("[]");
    });

    test("one element reverse", () => {
        const sll = new SinglyLinkedList();

        sll.push(1);

        sll.reverse();
        expect(sll.head?.value).toBe(1);
        expect(sll.tail?.value).toBe(1);
        expect(sll.length).toBe(1);
        expect(sll.toString()).toBe("[1]");
    });

    test("two elements reverse", () => {
        const sll = new SinglyLinkedList();

        sll.push(1);
        sll.push(2);

        sll.reverse();
        expect(sll.head?.value).toBe(2);
        expect(sll.tail?.value).toBe(1);
        expect(sll.length).toBe(2);
        expect(sll.toString()).toBe("[2, 1]");
    });

    test("many elements reverse", () => {
        const sll = new SinglyLinkedList();

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
        const sll = new SinglyLinkedList();
        expect(sll.toString()).toBe("[]");
    });
    test("one element", () => {
        const sll = new SinglyLinkedList();
        sll.push(10);
        expect(sll.toString()).toBe("[10]");
    });
    test("many elements", () => {
        const sll = new SinglyLinkedList();
        sll.push("hello");
        sll.push("world");
        sll.push("!");
        sll.push("good");
        sll.push("programmer");
        expect(sll.toString()).toBe("[hello, world, !, good, programmer]");
    });
});
