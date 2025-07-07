// way-1
let arr = [0, 4, 5, 6, 2, 1, 3]; // [6,2,1,3,0,4,5]
let n = 3;

let newArray =[];

for(let i=n; i<arr.length; i++){
    newArray.push(arr[i])
}
for(let j=0; j<n; j++){
    newArray.push(arr[j])
}
console.log(newArray);
// Time complexity :- O(2n) - O(n)
//Space complexity :- O(n)


//way-2
let arr2 = [0, 4, 5, 6, 2, 1, 3]; // [6,2,1,3,0,4,5]
let k = 3;

for(let i=arr2.length-1; i>=k; i--){
    let a = arr2.pop();
    arr2.unshift(a);
}
console.log(arr2);
//Time complexity :- O(n*2) because, one loop and inside the we are doing the insert operation!
// space complexity :- O(1)


//way-3
let arr3 = [0, 4, 5, 6, 2, 1, 3]; // [6,2,1,3,0,4,5]
let p = 3;

for(let i=0; i<p; i++){
    let b = arr3.shift();
    arr3.push(b)
}
console.log(arr3);
//Time complexity :- O(n*2) because, one loop and inside the we are doing the shift operation!
// space complexity :- O(1)


//way-4
let arr4 = [0, 4, 5, 6, 2, 1, 3]; // [6,2,1,3,0,4,5]
let r = 3;

function reverse(arr,start,end){
    while(start<end){
        [arr[start],arr[end]] = [arr[end],arr[start]];
        start++;
        end--;
    }
}
reverse(arr4,0,r-1);   // reverse 0-r
reverse(arr4,r,arr4.length-1);  // reverse r-end
reverse(arr4,0,arr4.length-1); //reverse full array

console.log(arr4);
// time complexity :- O(n) because first function runs upto r, second functions runs upto n-r, third one runs total - O(r+(n-r)+n)
//space complexity :- O(1)
