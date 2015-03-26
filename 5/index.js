function sortDict(obj) {
    this.obj = obj;
    this.sortedArray;

    var generateArray = function() {
        var temp = [], ele = [];
        for (var o in obj) {
            console.log(typeof o);
            ele = [];
            if (typeof o == 'function')
                continue;
            ele.push(+o ? +o : o, +obj[o]);
            temp.push(ele);
        }

        return temp;
    };

    var sortMethod = function(a, b) {
        if (a[1] < b[1])
            return 1;
        else
            return -1;
    }

    return generateArray().sort(sortMethod);
}

module.exports = sortDict;