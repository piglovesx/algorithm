var assert = require("assert"), sortDict = require('./index.js');

describe('sort dict', function() {
    /*var so = new sortDict({3:1, 2:2, 1:3});
    it('should return an array', function() {
        assert.notEqual(null, so.generateArray());
        assert.equal(3, so.generateArray().length);
        assert.deepEqual([[1, 3], [2,2], [3,1]], so.sortedArray);
    });

    var so1 = new sortDict({1:2,2:4,3:6});
    it('should return an array', function() {
        assert.notEqual(null, so1.generateArray());
        assert.equal(3, so1.generateArray().length);
        assert.deepEqual([[3,6],[2,4],[1,2]], so1.sortedArray);
    });*/

    it('should return an array', function() {
        assert.deepEqual([[3,6],[2,4],[1,2]], sortDict({1:2,2:4,3:6}));
        assert.deepEqual([[1,3],[2,2],[3,1]], sortDict({3:1,2:2,1:3}));
        assert.deepEqual([['Z',6],['K',4],['A',2]], sortDict({'A':2,'K':4,'Z':6}));
        assert.deepEqual([['0Z',6],['K',4],['A',2]], sortDict({'A':2,'K':4,'0Z':6}));
    });
});