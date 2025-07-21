// find the sum of all numbers in an array.
let arr = [5,3,2,0,1]; //11

function sum(n){
    if(n==0) return arr[n];
    return arr[n] + sum(n-1);
}
console.log(sum(arr.length-1));  //11
// Time complexity :- O(n)
// Space complexity :- O(n)


// Find the sum of all odd numbers in an array.
let arr1 = [5,2,0,3,6,7]  //12

function oddSum(n){
    let isOdd = n % 2 != 0;
    
    if(n==0){
        if(isOdd){
            return arr1[n];
        }
        else{
            return 0;
        }
    }

    if(isOdd){
        return arr1[n] + oddSum(n-1);
    }
    else{
        return 0 + oddSum(n-1);
    }
}
console.log(oddSum(arr1.length-1))
// Time complexity :- O(n)
// Space complexity :- O(n)