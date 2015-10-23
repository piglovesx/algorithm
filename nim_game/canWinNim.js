var canWinNim = function (n) {
	if (n %4 >= 1 && n %4 <= 3)
		return true;
	if (n %4 == 0)
		return false;
}
