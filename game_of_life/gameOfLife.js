/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    var new_board = [], n = board[0].length, m = board.length;

    var valid = function(i, j) {
        return board[i] ? (board[i][j] ? board[i][j] : 0) : 0;
    };
    var neighbor = function(i, j) {
    	neighbors = [];
    	if (i===0 && (j === 0 || j == n - 1) || i == m -1 && (j === 0 || j == n -1)) {
    		var x = i - 1 < 0 ? 1: -1, y = j - 1 < 0 ? 1 : -1;
    		neighbors.push(valid(i+x, j), valid(i, j+y), valid(i+x, j+y));
    		return neighbors;
    	}
    	if ((i === 0 || i == m - 1) && j>0 && j< n-1 || (j === 0 || j ==n-1) && i>0 && i<m-1) {
    		if (i === 0)
    			neighbors.push(valid(i, j-1), valid(i, j+1), valid(i+1, j), valid(i+1, j+1), valid(i+1, j-1));
    		if (i == m - 1)
    			neighbors.push(valid(i, j-1), valid(i, j+1), valid(i-1, j), valid(i-1, j+1), valid(i-1, j-1));
    		if (j === 0)
    			neighbors.push(valid(i-1, j), valid(i+1, j), valid(i, j+1), valid(i-1, j+1), valid(i+1, j+1));
    		if (j == n -1)
    			neighbors.push(valid(i -1, j), valid(i+1, j), valid(i, j-1), valid(i-1, j-1), valid(i+1, j-1));
    		return neighbors;
    	}
    	neighbors.push(valid(i-1, j-1), valid(i-1, j), valid(i-1, j+1), valid(i, j+1), valid(i+1, j+1), valid(i+1, j), valid(i+1, j-1), valid(i, j-1));
    	return neighbors;
    };
    var calculate = function(neighbors, target) {
    	var total = neighbors.reduce(function(sum, v, i){
    		return sum + v;
    	}, 0), flag = target;
    	if (total < 2 && target === 1)
    		flag = 0;
    	if (total === 3)
    		flag = 1;
        if (total > 3 && target === 1)
            flag = 0;
        return flag;
    };
    for (i = 0; i < m; i++) {
        new_board.push([]);
        for (j = 0; j < n; j++) {
            new_board[i][j] = calculate(neighbor(i, j), board[i][j]);
        }
    }
    new_board.forEach(function(v, i) {
        v.forEach(function(vi, j) {
            board[i][j] = vi;
        });
    });
};
var board = [[1]];
gameOfLife(board);
console.log(board);
