let arr = [1, 2, 3, 1];
let k = 3;

var Duplicates = (arr, k) => {
    let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i]) && i - map.get(arr[i]) <= k) {
      return true;
    }
    map.set(arr[i], i);
  }
  return false;
};
console.log(Duplicates(arr, k));

//  Time Complexity: O(n)
//  Space Complexity: O(n)