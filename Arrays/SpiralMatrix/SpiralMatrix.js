let arr = [[1,2,3],[4,5,6],[7,8,9]];   // [1,2,3,6,9,8,7,4,5]


let result = [];

let top = 0;
let bottom = arr.length - 1;
let left = 0;
let right = arr[0].length - 1;

while (left <= right && top <= bottom) {
    // left → right
    for (let i = left; i <= right; i++) {
        result.push(arr[top][i]);
    }
    top++;

    // top → bottom
    for (let i = top; i <= bottom; i++) {
        result.push(arr[i][right]);
    }
    right--;

    // right → left (only if there is a remaining row)
    if (top <= bottom) {
        for (let i = right; i >= left; i--) {
            result.push(arr[bottom][i]);
        }
        bottom--;
    }

    // bottom → top (only if there is a remaining column)
    if (left <= right) {
        for (let i = bottom; i >= top; i--) {
            result.push(arr[i][left]);
        }
        left++;
    }
}
console.log(result);
//Time complexity :- O(m*n)
// space complexity :- O(m*n)