var assert = require("assert"), sumE = require("./index");

describe('sum Equal', function(){
    it('should return undefined', function() {
        assert.ok(sumE([]) == undefined);
        assert.ok(sumE('') == undefined);
        assert.ok(sumE([1]) == undefined);
        assert.ok(sumE([1, 2]) == undefined);
    });

    it("should return the right index", function() {
        assert.equal(1, sumE([1, 2, 1]));
        assert.equal(3, sumE([4, 1, 7, 9, 3, 9]));
        assert.equal(2, sumE([4, 1, 2, 5]));
        // assert.equal();
    });
});
