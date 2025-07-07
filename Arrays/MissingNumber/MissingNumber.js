let arr = [3,0,1];

let actualSum = 0;   // array sum
for(let i=0; i< arr.length;i++){
    actualSum += arr[i]
}

let n = arr.length;
let originalSum = 0; // original sum

for(let i=0; i<=n;i++){
    originalSum += i
}

console.log("Missing number is : ", originalSum-actualSum);
// Time complexity :- O(n)
// Space complexity :- O(1)


//way-2
let arr1 = [3,0,1];

let actualSum1 = 0;   // array sum
for(let i=0; i< arr1.length;i++){
    actualSum1 += arr1[i]
}
let k = arr1.length;
let originalSum1 = k * (k+1)/2;

console.log("Missing number is : ", originalSum1-actualSum1);
// Time complexity :- O(n) because one loop and originalSum1 is constant time.
// Space complexity :- O(1)