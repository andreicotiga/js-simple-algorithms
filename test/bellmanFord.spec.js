'use strict'

import chai from 'chai'
import computeBellmanFord from '../src/bellmanFord'

let expect = chai.expect;
const graph = [{
        from: "S",
        to: "A",
        cost: 4
    },
    {
        from: "S",
        to: "E",
        cost: -5
    },
    {
        from: "A",
        to: "C",
        cost: 6
    },
    {
        from: "B",
        to: "A",
        cost: 3
    },
    {
        from: "C",
        to: "B",
        cost: -2
    },
    {
        from: "D",
        to: "C",
        cost: 3
    },
    {
        from: "D",
        to: "A",
        cost: 10
    },
    {
        from: "E",
        to: "D",
        cost: 8
    }
];

describe('computeBellmanFord', () => {
    it('computes the correct shortest paths', () => {
        let shortestPaths = computeBellmanFord(graph, "S");

        expect(shortestPaths).to.deep.equal({
            S: 0,
            A: 4,
            B: 4,
            C: 6,
            D: 3,
            E: -5
        });
    });

    it('throws for null graph', () => {
        expect(computeBellmanFord.bind(null, null, "S")).to.throw('Invalid graph');
    });

    it('throws for null target vertex', () => {
        expect(computeBellmanFord.bind(null, graph, null)).to.throw('Invalid targetVertex');
    });
});