import { IGraph } from "./types";

export class Graph implements IGraph {
    adjacencyList: { [key: string]: string[] };

    constructor() {
        this.adjacencyList = {};
    }

    addEdge(vertex1: string, vertex2: string): boolean {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            return false;
        }

        if (this.adjacencyList[vertex1].some((vertex) => vertex === vertex2)) {
            return false;
        }

        if (this.adjacencyList[vertex2].some((vertex) => vertex === vertex1)) {
            return false;
        }

        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);

        return true;
    }

    addVertex(vertex: string): boolean {
        if (this.adjacencyList[vertex]) {
            return false;
        }

        this.adjacencyList[vertex] = [];
        return true;
    }

    removeEdge(vertex1: string, vertex2: string): boolean {
        if (!this.adjacencyList[vertex1]?.some((value) => value === vertex2)) {
            return false;
        }

        if (!this.adjacencyList[vertex2]?.some((value) => value === vertex1)) {
            return false;
        }

        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            (value) => value !== vertex2,
        );

        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            (value) => value !== vertex1,
        );

        return true;
    }

    removeVertex(vertex: string): boolean {
        if (!this.adjacencyList[vertex]) {
            return false;
        }

        for (let i = this.adjacencyList[vertex].length; i >= 0; i--) {
            const currentVertex = this.adjacencyList[vertex][i];
            this.removeEdge(vertex, currentVertex);
        }

        delete this.adjacencyList[vertex];

        return true;
    }
}
