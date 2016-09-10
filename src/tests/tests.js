var expect = require('chai').expect;
var beerList = require('../../beerdata/multipleExample.js');
var aleGraph = require('../server/graph/node.js').aleGraph;
describe('Graph Tests', function() {
  it('Should initialize the correct Graph', function() {
    expect(aleGraph.nodes.length).to.equal(9)
  });

  it('Should have a set Node method', function() {
    aleGraph.addNode()
    expect(aleGraph.nodes.length).to.equal(10)
  });
});

describe('Node Tests', function() {
  it('Should have an isAdjacent method', function() {
    expect(aleGraph.nodes[0].isAdjacent).to.be.a('function');
    expect(aleGraph.nodes[0].isAdjacent(aleGraph.nodes[1])).to.equal(true);
  });
  it('Should have an allAdjacent method', function() {
    expect(aleGraph.nodes[0].allAdjacent().length).to.equal(4);
  })

});

describe('Style Families', function() {
  it('Should initialize styleFamilies object', function() {
    var styleFamilies = require('../../beerdata/styleFamilies.js')
    expect(Object.keys(styleFamilies).length).to.equal(14);
  })
})