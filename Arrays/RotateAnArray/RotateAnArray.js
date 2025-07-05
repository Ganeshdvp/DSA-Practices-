let arr = [0, 4, 5, 6, 2, 1, 3]; // [5,6,2,1,3,0,4]
let n = 3;

let newArray =[];

for(let i=n; i<arr.length; i++){
    newArray.push(arr[i])
}
for(let j=0; j<n; j++){
    newArray.push(arr[j])
}
console.log(newArray);
// Time complexity :- O(2n)
//Space complexity :- O(n)