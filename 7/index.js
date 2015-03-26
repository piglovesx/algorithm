function Archiver() {
    var temperature;
    var archive = [];
    
    this.__defineGetter__('temperature', function() {
        return temperature;
    });

    this.__defineSetter__('temperature', function(val) {
        var obj = {};
        obj.date = new Date();
        obj.val = val;
        archive.push(obj);
        temperature = val;
    });

    this.getArchive = function() {
        return archive;
    }
}

module.exports = Archiver;