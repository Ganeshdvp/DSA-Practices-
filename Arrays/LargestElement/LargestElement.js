// Find the largest element in an array.

//way-1
let arr1 = [10,20,4,90,80,99];
let maxArray = Math.max(...arr1)
console.log(maxArray)
// Time complexity:- O(n) because the spread operates iterate n times so Math.max() compare one by one so
// space complexity:- O(n) because spread operator creates a new list of n arguments individually on the call stack so it uses additional space temporarily!


//way-2
let arr2 = [80,20,4,70,80,0];
let large = 0;

for(let i=0; i< arr2.length; i++){
    for(let j= i+1; j<arr2.length; j++){
        if(arr2[i] < arr2[j]){
            large = arr2[j]
        }
    }
}
console.log(large);
// Time complexity :- O(n*2) because we are using the two loops.
// Space Complexity :- O(1)


//way-3
let arr3 = [10,20,4,90,80,99];
let max = arr3[0];

for(let i=0; i< arr3.length; i++){
    if(arr3[i] > max){
        max = arr3[i];
    }
}
console.log(max)
// Time complexity :- O(n) because we only iterate the array one time.
// Space Complexity :- O(1) because we are using the constant variable (max) only. 
