var arrs = [9, 8, 7, 6, 5, 4, 3, 2, 1];

function quicksort(arr) {
    if (arr.length <= 1)
        return arr;
    var mid = Math.floor(arr.length / 2);
    var left = [], right = [];

    for (var i = 0, len = arr.length; i<len; i++) {
        if (mid === i)
            continue;
        if (arr[i] <= arr[mid])
            left.push(arr[i]);
        else
            right.push(arr[i]);
    }

    left = quicksort(left);
    right = quicksort(right);
    left.push(arr[mid]);
    return left.concat(right);
}

module.exports = quicksort;
