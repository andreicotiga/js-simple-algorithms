'use strict'

//The function computes the shortest path from a vertex (targetVertex) to all other vertices in the graph using the 'Dijkstra' algorithm
//The 'graph' argument passed must have a structure similar to the following:
//  [
//     { from: "A", to: "C", cost: 6 },
//     { from: "B", to: "A", cost: 3 },
//     { from: "C", to: "B", cost: -2 },
//     { from: "D", to: "C", cost: 3 },
//     { from: "D", to: "A", cost: 10 },
//  ]
//The 'targetVertex' argument is the name of the vertex (e.g. A)
const computeDijkstra = (graph, targetVertex) => {

    if (!graph) {
        throw "Invalid graph"
    }

    if (!targetVertex) {
        throw "Invalid targetVertex"
    }

    //construct the array of vertices (e.g. [A,B,C,D])
    let vertices = [targetVertex];

    for (var path of graph) {
        if (vertices.lastIndexOf(path.from) < 0) {
            vertices.push(path.from);
        }
    }

    //construct the memo table
    let memo = new MemoTable(vertices, targetVertex);

    //process recursively the graph
    process(graph, memo, targetVertex);

    return memo.getCosts();
}

class MemoTable {

    constructor(vertices, targetVertex) {
        //the cost from the 'targetVertex' to itself is 0
        let target = {
            name: targetVertex,
            cost: 0,
            visited: false
        };

        //the cost from the 'targetVertex' to other vertices is infinity
        this.table = [target];
        for (let vertex of vertices) {
            if (vertex !== target.name) {
                this.table.push({
                    name: vertex,
                    cost: Number.POSITIVE_INFINITY,
                    visited: false
                });
            }
        }
    }

    //returns the next vertex to process
    nextVertex() {

        //it needs to be an unvisited vertex
        const unvisited = this.table.filter(c => {
            return !c.visited;
        });

        //it needs to have the lowest cost
        if (unvisited.length > 0) {
            return unvisited.reduce((prev, next) => {
                return prev.cost < next.cost ? prev : next;
            });
        } else {
            return null;
        }
    }

    //gets an entry based on the vertex name
    getEntry(name) {
        return this.table.find(c => c.name === name);
    }

    //sets a vertex as visited
    setAsVisited(name) {
        let entry = this.getEntry(name);

        if (entry) {
            entry.visited = true;
        }
    }

    //gets a vertex cost
    getCost(name) {
        let entry = this.getEntry(name);

        if (entry) {
            return entry.cost;
        } else {
            return null;
        }
    }

    //sets a vertex cost
    setCost(name, cost) {
        let entry = this.getEntry(name);

        if (entry) {
            entry.cost = cost;
        }
    }

    //get all the costs
    getCosts() {
        let results = [];
        for (var entry of this.table) {
            results.push({
                name: entry.name,
                cost: entry.cost
            });
        }

        return results;
    }
}

const process = (graph, memo, targetVertex) => {

    //get the outgoing edges from the 'targetVertex'
    const edges = graph.filter(path => {
        return path.from === targetVertex
    });

    //calculate the new cost for outgoing edges
    for (let edge of edges) {
        let fromVertexCost = memo.getCost(edge.from);
        let toVertexCost = memo.getCost(edge.to);

        //the new cost will be the 'fromVertex' computed cost summed to the graph edge cost
        let newCost = fromVertexCost + edge.cost;

        //if the new cost is lower than what we have computed so far, updated the computed value with the new cost
        if (newCost < toVertexCost) {
            memo.setCost(edge.to, newCost);
        }
    }

    //set the current vertex as visited
    memo.setAsVisited(targetVertex);

    //get next vertex and process it if exists
    let next = memo.nextVertex();
    if (next) {
        process(graph, memo, next.name);
    }
}

export default computeDijkstra;