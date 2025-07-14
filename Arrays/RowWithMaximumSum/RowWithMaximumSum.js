//way-1
let arr = [[11,22,32], [4,5,6], [7,8,9]];

let max_sum = -Infinity;
let max_index = 0;

for(let i=0; i<arr.length; i++){
    let sum = 0;
    for(let j=0; j<arr[i].length; j++){
        sum += arr[i][j];
    }
    if(sum>max_sum){
        max_sum = sum;
        max_index = i;
    }
}

console.log('max sum : ',max_sum);
console.log('max index : ',max_index);
// time complexity :- O(m*n)
// space complexity :- O(1)