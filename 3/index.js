var arrs = [9, 8, 9, 6, 5, 4];

arrs.sort();
console.log(arrs);

arrs.sort(function(a, b) {
    return (a < b ? 1 : -1);
});

console.log(arrs);