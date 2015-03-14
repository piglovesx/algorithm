var assert = require("assert"), quicksort = require("./index");

describe('Array quicksort', function() {
    it('should renturn the sorted array', function() {
        assert.deepEqual([9], quicksort([9]));
    });

    it('should not equal', function() {
        assert.notDeepEqual([9, 8], quicksort([9, 8]));
    });

    it('should equal', function() {
        assert.deepEqual([8, 9], quicksort([9, 8]));
    });

    it('should equal', function() {
        assert.deepEqual([8, 9, 9], quicksort([9, 8, 9]));
    });

    it('should equal', function() {
        assert.deepEqual([6, 7, 8, 9, 9, 9], quicksort([9, 8, 9, 7, 6, 9]));
    });
});