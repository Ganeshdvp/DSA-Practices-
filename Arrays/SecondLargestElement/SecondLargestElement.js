//way-1
let arr1 = [10,20,50,10,8,2,30];
let unique = [...new Set(arr1)]   // [10,20,50,8,2,30]
let sorted = unique.sort((i,j)=> i-j);  // [ 2, 8, 10, 20, 30, 50 ]
let secondLargest = sorted.length-2; // 30
console.log(sorted[secondLargest]);
// Time complexity:- O(n log n)
// space complexity :- O(n)


//way-2
let arr2 = [3,5,1,2,4,5];
// let arr2 = [5,5,5,5];
let large = -Infinity;
let secondLarge = Infinity;

for(let i=0; i<arr2.length; i++){
    if(arr2[i] > large){
        secondLarge = large;
        large = arr2[i]
    }
    if(arr2[i] < large && arr2[i] > secondLarge){
        secondLarge = arr2[i]
    }
}
if(secondLarge === -Infinity){
    console.log("not found");
}
else{
    console.log(secondLarge);    
}
// Time complexity:- O(n) because we are using one loop.
// Space complexity:- O(1)