//way-1
let arr = [9,4,9,6,7,4];

for(let i=0; i<arr.length; i++){
    let unique = true;
    for(let j=0; j<arr.length; j++){
        if(i!==j && arr[i] === arr[j]){
            unique = false;
            break;
        }
    }
    if(unique){
        console.log(arr[i]);
        break;
    }
}
// Time complexity :- O(n*2)
// Space complexity :- O(1)



//way-2
let arr2 = [9,4,9,6,7,4];

let unique = {};

for(let num of arr2){
    unique[num] = (unique[num] || 0) + 1;
}
for(let num in unique){
    if(unique[num] === 1){
        console.log(num);
        break;
    }
}
// Time complexity :- O(n)
// Space complexity :- O(n)
