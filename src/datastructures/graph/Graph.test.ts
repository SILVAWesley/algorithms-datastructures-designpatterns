import { Graph } from "./Graph";

describe("Graph | Simple | add vertex | 01", () => {
    test("one vertex", () => {
        const graph = new Graph();

        expect(graph.addVertex("tokyo")).toBe(true);

        expect(graph.adjacencyList).toStrictEqual({ tokyo: [] });
    });

    test("existing vertex", () => {
        const graph = new Graph();

        expect(graph.addVertex("tokyo")).toBe(true);
        expect(graph.addVertex("tokyo")).toBe(false);

        expect(graph.adjacencyList).toStrictEqual({ tokyo: [] });
    });

    test("many vertexes", () => {
        const graph = new Graph();

        expect(graph.addVertex("tokyo")).toBe(true);
        expect(graph.addVertex("new york")).toBe(true);
        expect(graph.addVertex("boston")).toBe(true);
        expect(graph.addVertex("brasilia")).toBe(true);
        expect(graph.addVertex("toronto")).toBe(true);

        expect(graph.adjacencyList).toStrictEqual({
            tokyo: [],
            "new york": [],
            boston: [],
            brasilia: [],
            toronto: [],
        });
    });
});

describe("Graph | Simple | add edge | 01", () => {
    test("empty vertexes", () => {
        const graph = new Graph();

        expect(graph.addEdge("tokyo", "new york")).toBe(false);

        expect(graph.adjacencyList).toStrictEqual({});
    });

    test("one edge", () => {
        const graph = new Graph();

        expect(graph.addVertex("tokyo")).toBe(true);
        expect(graph.addVertex("new york")).toBe(true);

        expect(graph.addEdge("tokyo", "new york")).toBe(true);

        expect(graph.adjacencyList).toStrictEqual({
            tokyo: ["new york"],
            "new york": ["tokyo"],
        });
    });

    test("existing edge", () => {
        const graph = new Graph();

        expect(graph.addVertex("tokyo")).toBe(true);
        expect(graph.addVertex("new york")).toBe(true);

        expect(graph.addEdge("tokyo", "new york")).toBe(true);
        expect(graph.addEdge("tokyo", "new york")).toBe(false);

        expect(graph.adjacencyList).toStrictEqual({
            tokyo: ["new york"],
            "new york": ["tokyo"],
        });
    });

    test("not existing vertex", () => {
        const graph = new Graph();

        expect(graph.addVertex("tokyo")).toBe(true);
        expect(graph.addVertex("new york")).toBe(true);

        expect(graph.addEdge("tokyo", "boston")).toBe(false);

        expect(graph.adjacencyList).toStrictEqual({
            tokyo: [],
            "new york": [],
        });
    });

    test("many edges", () => {
        const graph = new Graph();

        expect(graph.addVertex("tokyo")).toBe(true);
        expect(graph.addVertex("new york")).toBe(true);
        expect(graph.addVertex("boston")).toBe(true);
        expect(graph.addVertex("brasilia")).toBe(true);
        expect(graph.addVertex("toronto")).toBe(true);

        expect(graph.addEdge("toronto", "tokyo")).toBe(true);
        expect(graph.addEdge("toronto", "new york")).toBe(true);
        expect(graph.addEdge("toronto", "brasilia")).toBe(true);
        expect(graph.addEdge("boston", "brasilia")).toBe(true);

        expect(graph.adjacencyList).toStrictEqual({
            tokyo: ["toronto"],
            "new york": ["toronto"],
            boston: ["brasilia"],
            brasilia: ["toronto", "boston"],
            toronto: ["tokyo", "new york", "brasilia"],
        });
    });
});

describe("Graph | Simple | remove edge | 01", () => {
    test("empty edges, empty vertexes", () => {
        const graph = new Graph();

        expect(graph.removeEdge("tokyo", "new york")).toBe(false);

        expect(graph.adjacencyList).toStrictEqual({});
    });

    test("empty edges", () => {
        const graph = new Graph();

        expect(graph.addVertex("tokyo")).toBe(true);
        expect(graph.addVertex("new york")).toBe(true);

        expect(graph.removeEdge("tokyo", "new york")).toBe(false);

        expect(graph.adjacencyList).toStrictEqual({
            tokyo: [],
            "new york": [],
        });
    });

    test("one edge", () => {
        const graph = new Graph();

        expect(graph.addVertex("tokyo")).toBe(true);
        expect(graph.addVertex("new york")).toBe(true);

        expect(graph.addEdge("tokyo", "new york")).toBe(true);
        expect(graph.removeEdge("tokyo", "new york")).toBe(true);

        expect(graph.adjacencyList).toStrictEqual({
            tokyo: [],
            "new york": [],
        });
    });

    test("not existing edge", () => {
        const graph = new Graph();

        expect(graph.addVertex("tokyo")).toBe(true);
        expect(graph.addVertex("new york")).toBe(true);

        expect(graph.removeEdge("tokyo", "boston")).toBe(false);

        expect(graph.adjacencyList).toStrictEqual({
            tokyo: [],
            "new york": [],
        });
    });

    test("many edges", () => {
        const graph = new Graph();

        expect(graph.addVertex("tokyo")).toBe(true);
        expect(graph.addVertex("new york")).toBe(true);
        expect(graph.addVertex("boston")).toBe(true);
        expect(graph.addVertex("brasilia")).toBe(true);
        expect(graph.addVertex("toronto")).toBe(true);

        expect(graph.addEdge("toronto", "tokyo")).toBe(true);
        expect(graph.addEdge("toronto", "new york")).toBe(true);
        expect(graph.addEdge("toronto", "brasilia")).toBe(true);
        expect(graph.addEdge("boston", "brasilia")).toBe(true);

        expect(graph.removeEdge("toronto", "new york")).toBe(true);
        expect(graph.removeEdge("brasilia", "toronto")).toBe(true);
        expect(graph.removeEdge("brasilia", "boston")).toBe(true);
        expect(graph.removeEdge("toronto", "tokyo")).toBe(true);

        expect(graph.adjacencyList).toStrictEqual({
            tokyo: [],
            "new york": [],
            boston: [],
            brasilia: [],
            toronto: [],
        });
    });
});

describe("Graph | Simple | remove vertex | 01", () => {
    test("one vertex", () => {
        const graph = new Graph();

        expect(graph.addVertex("tokyo")).toBe(true);
        expect(graph.addVertex("new york")).toBe(true);

        expect(graph.addEdge("tokyo", "new york")).toBe(true);
        expect(graph.removeVertex("tokyo")).toBe(true);

        expect(graph.adjacencyList).toStrictEqual({
            "new york": [],
        });
    });

    test("not existing vertex", () => {
        const graph = new Graph();

        expect(graph.addVertex("tokyo")).toBe(true);
        expect(graph.addVertex("new york")).toBe(true);

        expect(graph.removeVertex("boston")).toBe(false);

        expect(graph.adjacencyList).toStrictEqual({
            tokyo: [],
            "new york": [],
        });
    });

    test("many edges", () => {
        const graph = new Graph();

        expect(graph.addVertex("tokyo")).toBe(true);
        expect(graph.addVertex("new york")).toBe(true);
        expect(graph.addVertex("boston")).toBe(true);
        expect(graph.addVertex("brasilia")).toBe(true);
        expect(graph.addVertex("toronto")).toBe(true);

        expect(graph.addEdge("toronto", "tokyo")).toBe(true);
        expect(graph.addEdge("toronto", "new york")).toBe(true);
        expect(graph.addEdge("toronto", "brasilia")).toBe(true);
        expect(graph.addEdge("boston", "brasilia")).toBe(true);

        expect(graph.removeVertex("toronto")).toBe(true);

        expect(graph.adjacencyList).toStrictEqual({
            tokyo: [],
            "new york": [],
            boston: ["brasilia"],
            brasilia: ["boston"],
        });

        expect(graph.removeVertex("boston")).toBe(true);

        expect(graph.adjacencyList).toStrictEqual({
            tokyo: [],
            "new york": [],
            brasilia: [],
        });

        expect(graph.removeVertex("tokyo")).toBe(true);

        expect(graph.adjacencyList).toStrictEqual({
            "new york": [],
            brasilia: [],
        });
    });
});
