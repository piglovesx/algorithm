var walls = [2, 9, 1, 2, 3, 9, 8, 9, 8],
    flag = 0, endFlag = 0, lastWalls;

function getTotalW() {
    var totalSum = 0;
    for (var i = 0, j = walls.length; i < j; i++) {

        if (walls[flag] <= walls[i] && i - flag > 1) {
            totalSum += getPartW(flag, i, walls);
            flag = i;
        }

        if (walls[flag] > walls[i] && i == j-1 && i - flag > 1) {
            endFlag = flag;
        }

        if (walls[flag] <= walls[i] && i - flag <= 1) {
            flag = i;
        }
    };

    lastWalls = walls.slice(endFlag).reverse();
    flag = 0;
    for (var i = 0, j = lastWalls.length; i < j; i++) {

        if (lastWalls[flag] <= lastWalls[i] && i - flag > 1) {
            totalSum += getPartW(flag, i, lastWalls);
            flag = i;
        }

        if (lastWalls[flag] <= lastWalls[i] && i - flag <= 1) {
            flag = i;
        }
    };
    

    return totalSum;
}

function getPartW(flag, endFlag, walls) {
    var sum = 0;
    for (var i = flag; i < endFlag; i++) {
        sum += walls[flag] - walls[i];
    }

    return sum;
}

//==============================================分隔线,良好组织后的代码============================================

Array.prototype.getPartW = function(flag, endFlag) {
    var sum = 0;
    for (var i = flag; i < endFlag; i++) {
        sum += this[flag] - this[i];
    }

    return sum;
}



function reduceF(total, value, index, arr) {
    if (arr[flag] <= value) {
        if (index - flag > 1)
            total += arr.getPartW(flag, index);
        flag = index;
    } else {
        if (index == arr.length - 1 && index - flag > 1) {
            endFlag = flag;
        }
    }
    return total;
}

function getTotalWa() {
    var total = walls.reduce(reduceF, 0);
    lastWalls = walls.slice(endFlag).reverse();
    flag = 0;
    total += (endFlag != 0 ? lastWalls.reduce(reduceF, 0) : 0);
    return total;
}

console.time("cal");
console.log(getTotalWa());
console.timeEnd("cal");