Python dictionaries are inherently unsorted. So what do you do if you need to sort the contents of a dictionary.

In this kata you will create a function that returns a sorted list of (key, value) tuples (Javascript: arrays of 2 items).

The list must be sorted by the value and be sorted largest to smallest.

```
sortDict({3:1,2:2,1:3}) == [[1,3],[2,2],[3,1]]
sortDict({1:2,2:4,3:6}) == [[3,6],[2,4],[1,2]]
```

### 很聪明的做法在recommend..js