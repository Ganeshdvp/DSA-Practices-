// way-1
let arr = [1,5,6,2,3,5]
let b = [...arr]         // shallow copy
let sorted = b.sort((i,j)=> i-j);

if(arr == sorted){
    console.log("it is sorted");
}
else{
    console.log("it is not sorted");
}
// Time complexity :- O(n log n)
// Space complexity :- O(n)


//way-2
let arr2 = [1, 2, 3, 4, 3];
let compare = arr2[0];
let check = false;

for(let i=1; i<arr2.length; i++){
    if(compare < arr2[i]){
        compare = arr2[i];
        check = true;
    }
    else{
        check= false;
        break;
    }
}
if(check === true){
    console.log("sorted");
}
else{
    console.log("not sorted");
}
// Time complexity:- O(n) because of loop
// Space complexity:- O(1) 


//way-3
let arr3 = [1, 2, 3, 4, 3];
let checking = true;

for(let i=1; i<arr3.length; i++){
    if(arr3[i] < arr3[i-1]){
        checking = false;
        break;
    }
}
if(checking === true){
    console.log("sorted");
}
else{
    console.log("not sorted");
}
// Time complexity:- O(n) because of loop
// Space complexity:- O(1) 