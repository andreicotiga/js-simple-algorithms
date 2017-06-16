'use strict'

import chai from 'chai'
import bellmanFord from '../src/bellmanFord'

let expect = chai.expect;

describe('Bellman-Ford', () => {
    it('calculates correct shortest paths from vertex S', () => {
        let graph = [
            { from: "S", to: "A", cost: 4 },
            { from: "S", to: "E", cost: -5 },
            { from: "A", to: "C", cost: 6 },
            { from: "B", to: "A", cost: 3 },
            { from: "C", to: "B", cost: -2 },
            { from: "D", to: "C", cost: 3 },
            { from: "D", to: "A", cost: 10 },
            { from: "E", to: "D", cost: 8 }
        ];

        let shortestPaths = bellmanFord(graph, "S");

        expect(shortestPaths).to.deep.equal({ S: 0, A: 4, B: 4, C: 6, D: 3, E: -5 });
    });

});
