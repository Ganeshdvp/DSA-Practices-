//way-1
let arr = [3,2,2,3]; // [2,2]
let val = 3;
let newArray =[];

for(let i=0; i<arr.length; i++){
    if(val !== arr[i]){
        newArray.push(arr[i]);
    }
}
console.log(newArray);
// Time complexity :- O(n)
// space complexity:- O(n)


//way-2
let arr2 = [3,2,2,3]; // [2,2]
let val2 = 3;

const res= arr2.filter((item)=>{
    return item !== val2;
})
console.log(res);
// Time complexity :- O(n)
// space complexity:- O(n)


//way-3
let arr3 = [3,2,2,3]; // [2,2]
let val3 = 3;
let k = 0;

for(let i=0; i<arr3.length; i++){
    if(arr3[i] !== val3){
        arr3[k] = arr3[i];
        k++;
    }
}
arr3.length = k;
console.log(arr3);
// Time complexity :- O(n)
// space complexity:- O(1)