let arr = [1,2,3,1];  // true

var duplicateFun = (nums)=>{
    let sort = nums.sort();

    for(let i=1; i<sort.length; i++){
        if(sort[i] === sort[i-1]){
            return true;
        }
    }
    return false;
}
console.log(duplicateFun(arr));
// Time complexity :- O(n) + O(nlogn)
// Space complexity :- O(1)



// way-2
let arr2 = [1,2,3,1];  // true

var duplicateFun2 = (nums)=>{
    let freq = {};

    for(let num of nums){
        freq[num] = (freq[num] || 0) + 1;
    }
    for(let num in freq){
        if(freq[num] !== 1){
            return true;
        }
    }
    return false;
}
console.log(duplicateFun2(arr2));
// Time complexity :- O(n)
// Space complexity :- O(n)



//way-3
let arr3 = [1,2,3,1];  // true

var duplicateFun3 = (nums)=>{
    let unique = new Set();

    for(let num of nums){
        if(unique.has(num)){
            return true;
        }
        unique.add(num);
    }
    return false;
}
console.log(duplicateFun3(arr3));
// Time complexity :- O(n)
// Space complexity :- O(n)