export interface IGraph {
    adjacencyList: { [key: string]: string[] };
    addEdge(vertex1: string, vertex2: string): boolean;
    addVertex(vertex: string): boolean;
    removeEdge(vertex1: string, vertex2: string): boolean;
    removeVertex(vertex: string): boolean;
}
