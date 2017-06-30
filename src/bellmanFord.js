const iterate = (graph, vertices, costs) => {

    //in case a shorter path is found return a flag saying it should call iterate again
    let doItAgain = false;

    for (let currentVertex of vertices) {

        //get the edges starting from current vertex
        let currentEdges = graph.filter((path) => {
            return path.from === currentVertex;
        });

        //calculate the new costs as the sum of the 'from' vertex and the connecting edge between the 2 vertices 
        for (var currentEdge of currentEdges) {
            const newCost = costs[currentEdge.from] + currentEdge.cost;

            //if the new cost is lower than existing cost, update the costs dictionary
            if (newCost < costs[currentEdge.to]) {
                costs[currentEdge.to] = newCost;
                doItAgain = true;
            }
        }
    }

    return doItAgain;
}

//Example of how a graph structure will look like     
//  [
//     { from: "A", to: "C", cost: 6 },
//     { from: "B", to: "A", cost: 3 },
//     { from: "C", to: "B", cost: -2 },
//     { from: "D", to: "C", cost: 3 },
//     { from: "D", to: "A", cost: 10 },
//  ]
const bellmanFord = (graph, targetVertex) => {

    //construct the array of vertices (e.g. [A,B,C,D])
    let vertices = [targetVertex];

    //construct the costs dictionary 
    //initially the cost from the target vertex to itself will be zero, 
    //while to the rest of the vertices it will be maximum possible (e.g. if A is the target vertex the dictionary will look like {A: 0, B: Infinity, C: Infinity, D: Infinity})
    let costs = {};
    costs[targetVertex] = 0;

    for (var path of graph) {
        if (vertices.lastIndexOf(path.from) < 0) {
            vertices.push(path.from);
            costs[path.from] = Number.POSITIVE_INFINITY;
        }
    }

    //calculate the minimum path from each vertex to other vertices
    //this happens while no more shorter paths are found
    for (let vertex of vertices) {
        if (!iterate(graph, vertices, costs)) {
            break;
        }
    }

    //return the costs dictionary, that will contain the minumum path from the targer vertex to all other vertices
    return costs;
}

export default bellmanFord;