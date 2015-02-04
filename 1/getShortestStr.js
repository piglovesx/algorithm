//搜狗面试：找一个字符串中包含全部出现字符的最小字串
//就如题目所说，一个字符串中含有n个字符，其中有m个不同的字符，n>>m，
//用最少的时间和空间找到包含所有这m个字符的最短的字串，不考虑特殊字符，只考虑字母数字即可。
//例如：abccbaddac,返回：cbad
function getShortestStr(str) {
    var t = s = getShortLen(str);
    var len = len1 = getShort(str);
    var innerstr = null;
    var flag = false;
    for (var j = 0; j <= len1; j++) {
        for (var i = 0; i <= len; i++) {
            innerstr = str.substring(i, i + t);
            if (innerstr.length - getShort(innerstr) == s) {
                flag = true;
                break;
            }
        }
        len--;
        t++;

        if (flag)
            break;
    }

    return innerstr;
}

function getShortLen(str) {
    return str.length - getShort(str);
}

function getShort(str) {
    var i = 0;
    Array.prototype.sort.call(str.split(''), function(a, b) {
        if (a == b) {
            i++;
            return 0;
        }
        return a < b ? -1 : 1;

    });
    return i;
}

// getShort('aaacb');
console.log(getShortestStr('ddddaaaaaacb'));

// the array to be sorted
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

console.time('normal');
var t = list.sort(function(a, b) {
    return a - b;
});
console.timeEnd('normal');

list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];
console.time('map method');
// temporary holder of position and sort-value
var map = list.map(function(e, i) {
  return { index: i, value: e.toLowerCase() };
})

// sorting the map containing the reduced values
map.sort(function(a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1;
});

// container for the resulting order
var result = map.map(function(e){
  return list[e.index];
});
console.timeEnd('map method');
