//way -1
let arr = [-2,1,-3,4,-1,2,1,-5,4]; // 6

let max_sum = -Infinity;

for(let i=0; i<arr.length; i++){
    let current_sum = 0;
    for(let j=i; j<arr.length; j++){
        current_sum += arr[j];
        if(current_sum > max_sum){
            max_sum = current_sum;
        }
    }
}
console.log(max_sum);
// Time complexity :- O(n*2)
// Space complexity :- O(1)


//way-2
let arr2 = [-2,1,-3,4,-1,2,1,-5,4]; // 6

let maxSum = arr2[0];
let currentSum = arr2[0];

for(let i=1; i<arr2.length; i++){
    currentSum = Math.max(arr2[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum )
}
console.log(maxSum);
// Time complexity :- O(n)
// Space complexity :- O(1)


//way-3
let array = [-2,1,-3,4,-1,2,1,-5,4] // 6

let maxSumm = -Infinity;
let currentSumm = 0;

for(let i=0; i<array.length; i++){
    currentSumm = currentSumm + array[i];
    if(currentSumm > maxSumm){
        maxSumm = currentSumm;
    }
    if(currentSumm < 0 ){
        currentSumm = 0;
    }
}
console.log('max sum : ', maxSumm);
// Time complexity :- O(n)
// Space complexity :- O(1)



// Return max sum of subarray
let arr3 = [-2,1,-3,4,-1,2,1,-5,4];

let max = arr3[0];
let current = arr3[0];
let start =0;
let end = 0;
let tempstart =0;

for(let i=1; i<arr3.length; i++){
    if(arr3[i] > current + arr[i]){
        current = arr[i];
        tempstart = i;
    }
    else{
        current += arr[i];
    }

    if(current > max){
        max = current;
        start = tempstart;
        end = i;
    }
}
console.log(arr3.slice(start,end+1));  // [4,-1,2,1]