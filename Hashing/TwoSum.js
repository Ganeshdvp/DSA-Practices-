let arr = [2,7,11,15];
let target = 9;

var twoSum = (arr, target)=>{
    let freq = {};

    for(let i=0; i<arr.length; i++){
    let complement = target - arr[i];

    if(freq[complement] !== undefined){
        console.log([freq[complement],i]);
    }

    freq[arr[i]] = i;
}
}
twoSum(arr,target);
// Time complexity :- O(n)
// Space complexity :- O(n)