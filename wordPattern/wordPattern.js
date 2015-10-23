var wordPattern = function(pattern, str) {
	if (!pattern || !str)
		return false;
	var patterns = pattern.split(''), strs = str.split(' '), memory = {}, valuememory = [];
	if (patterns.length != strs.length)
		return false;
	flag = true;
	for (var i =0; i<patterns.length; i++) {
		if (!memory[patterns[i]]) {
			memory[patterns[i]] = strs[i];
			if (valuememory.indexOf(strs[i]) ===-1 ) {
				valuememory.push(strs[i]);
			} else {
				flag = false;
				break;
			}
		}
		else if (memory[patterns[i]] && memory[patterns[i]] != strs[i]) {
			flag = false;
			break;
		}
	}
	return flag;
}

console.log(wordPattern('abba', 'dog cat cat dog'));
console.log(wordPattern('abba', 'dog cat cat fish'));
console.log(wordPattern('aaaa', 'dog cat cat dog'));
console.log(wordPattern('abba', 'dog dog dog dog'));
