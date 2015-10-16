var canWinNim = function (n) {
	// body...
	var runLoop = function(nim, total, turncount) {
		if (total >= 1 && total <=3) {
			if (turncount%3 === 0)
				return true;
			else
				return false;
		};
		return runLoop(1, total-1, ++turncount) || (total-2 <= 0 ? false : runLoop(2, total-2, ++turncount)) || (total - 3 <= 0 ? false: runLoop(3, total-3, ++turncount));
	}

	return runLoop(0, n, 0);
}

console.log(1, canWinNim(1));
console.log(2, canWinNim(2));
console.log(3, canWinNim(3));
console.log(canWinNim(4));
console.log(canWinNim(5));
console.log(canWinNim(6));
console.log(34, canWinNim(34));
console.log(32, canWinNim(32));
console.log(canWinNim(10));

/*for (var i = 5; i < 1000; i++) {
	if(!canWinNim(i)) {
		console.log(i);
	}
}*/
