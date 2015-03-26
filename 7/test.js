var assert = require("assert"), Archiver = require("./index");

var archiver = new Archiver();
describe('test getter and setter', function(){
    it('should work', function() {
        assert.equal(0, archiver.getArchive().length);
        archiver.temperature = 12;
        assert.ok(archiver.temperature != undefined);
        assert.equal(12, archiver.temperature);
        assert.equal(1, archiver.getArchive().length);
        assert.equal(12, archiver.getArchive()[0].val);
        assert.equal(new Date().getFullYear(), archiver.getArchive()[0].date.getFullYear());
        archiver.temperature = 13;
        assert.equal(13, archiver.temperature);
        assert.equal(2, archiver.getArchive().length);
    });
});


