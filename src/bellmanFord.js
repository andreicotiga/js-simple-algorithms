const iterate = (graph, vertices, costs) => {

    //in case a shorter path is found do it again
    let doItAgain = false;

    for (let currentVertex of vertices) {

        //get the edges starting from current vertex
        let currentEdges = graph.filter((path) => {
            return path.from === currentVertex;
        });

        //calculate the new cost
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

const bellmanFord = (graph, fromVertex) => {

    //construct the array of vertices (e.g. [A,B,C,D])
    let vertices = [fromVertex];

    //construct the costs dictionary 
    //initially the cost from the target vertex (A) to itself will be zero, while to the rest of the vertices it will be maximum possible (e.g. {A: 0, B: Infinity, C: Infinity, D: Infinity})
    let costs = {};
    costs[fromVertex] = 0;

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

    //return the costs, that will contain the minumum path
    return costs;

}

export default bellmanFord;