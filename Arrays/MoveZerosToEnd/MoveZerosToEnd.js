//way-1
let arr = [0,0,2,0,3,4,2,1,0];   //output:- [2.3,4,2,1,0,0,0,0]

let newArray =[];

for(let i=0; i<arr.length; i++){
    if(arr[i] !== 0){
        newArray.push(arr[i])
    }
}
while(newArray.length < arr.length){
    newArray.push(0)
}
console.log(newArray);
// Time complexity :- O(2n) which is O(n)
// Space complexity :- O(n)


// way-2
let arr2 = [0,0,2,0,3,4,2,1,0];
let j = 0;

for(let i =0; i<arr2.length; i++){
    if(arr2[i] !== 0){
        arr2[j] = arr2[i];
        j++;
    }
}
while(j< arr2.length){
    arr2[j] = 0;
    j++
}

console.log(arr2);
// Time complexity :- O(n)
// space complexity :- O(1)
