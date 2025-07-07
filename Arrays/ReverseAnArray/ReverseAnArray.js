// way-1
let arr = [1,2,6,7,3,5]  // [ 5,3,7,6,2,1 ]
let reverse = arr.reverse();
console.log(reverse);
// Time complexity :- O(n)
// Space complexity :- O(1)


//way-2
let arr1 = [1,2,6,7,3,5]  // [ 5,3,7,6,2,1 ]

let index= arr1.length-1;
let i=0;

while(i<index){
    [arr1[i], arr1[index]] = [arr1[index],arr1[i]]
    i++;
    index--;
}
console.log(arr1);
// Time complexity :- O(n)
// Space complexity :- O(1)