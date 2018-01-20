'use strict'

import chai from 'chai'
import dijkstra from '../src/dijkstra'

let expect = chai.expect;

describe('Dijkstra', () => {
    it('calculates correct shortest paths starting from vertex S', () => {
        const graph = [
            { from: "S", to: "A", cost: 4 },
            { from: "S", to: "E", cost: 2 },
            { from: "A", to: "D", cost: 3 },
            { from: "A", to: "C", cost: 6 },
            { from: "A", to: "B", cost: 5 },
            { from: "B", to: "A", cost: 3 },
            { from: "C", to: "B", cost: 1 },
            { from: "D", to: "C", cost: 3 },
            { from: "D", to: "A", cost: 1 },
            { from: "E", to: "D", cost: 1 }
        ];

        let shortestPaths = dijkstra(graph, "S");

        expect(shortestPaths).to.deep.equal([
            { name: 'S', cost: 0 },
            { name: 'A', cost: 4 },
            { name: 'B', cost: 7 },
            { name: 'C', cost: 6 },
            { name: 'D', cost: 3 },
            { name: 'E', cost: 2 }]
        );
    });

});