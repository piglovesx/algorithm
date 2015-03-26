function sumEqual(arr) {
    var flag = undefined;
    if (!Array.isArray(arr) || arr.length === 0 || arr.length === 1 || arr.length === 2)
        return flag;
    var len = arr.length;
    arr.forEach(function(cv, index, array) {
        if (index > 0 && index < len - 1) {
            if (sum(arr.slice(0, index)) === sum(arr.slice(index + 1, len))) {
                flag = index;
                return flag;
            }
        }
    });

    function sum(innerarr) {
        return innerarr.reduce(function(pv, cv, index) {
            return pv + cv;
        }, 0);
    }
    return flag;
}

module.exports = sumEqual;