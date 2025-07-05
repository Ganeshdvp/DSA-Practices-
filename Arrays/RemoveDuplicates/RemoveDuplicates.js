// way-1
let arr = [0, 0, 1, 2, 2, 2, 3, 4, 0]; //[0,1,2,3,4]

let unique = [...new Set(arr)]
console.log(unique);
// Time complexity :- O(n)
// Space complexity :- O(m) 'm' means unique elements!

//way-2
let arr2 = [0, 0, 1, 2, 2, 2, 3, 4, 0];

let newArray = [];

for(let i=0; i<arr2.length; i++){
    let count = 0;
    for(let j=i+1; j<arr2.length; j++){
        if(arr2[i] === arr2[j]){
            count++;
            break;
        }
    }
    if(count === 0){
        newArray.push(arr2[i])
    }
}
console.log(newArray);
// Time complexity :- O(n*2)
// Space complexity :- O(n)


//way-3    two-pointer technique
let arr3 = [0, 0, 1, 2, 2, 2, 3, 4, 0];
k =0 ;

for(let i=1; i<arr3.length; i++){
    if(arr3[i] !== arr3[k]){
        k++;
        arr3[k] = arr3[i];
    }
};
arr3.length = k;
console.log(arr3);
// Time complexity :- O(n) because the array is sorted and we use only one loop
// Space complexity :- O(1)


