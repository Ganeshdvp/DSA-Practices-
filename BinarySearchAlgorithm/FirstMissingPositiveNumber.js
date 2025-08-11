//way-1  hashtable maybe
let nums = [1,2,0];

function MissingNumber1(nums){
    let set = new Set(nums);
    let i=1;
    
    while(true){
        if(!set.has(i)){
            return i;
        }
        i++;
    }
}
console.log(MissingNumber1(nums));
// Time complexity :- O(n)
// Space complexity :- O(n)



// way-2
let arr = [7,8,9,11,12];   //1
let n = arr.length;

function MissingNumber(arr){
    for(let i=0; i<arr.length; i++){
        while(1<=arr[i] && arr[i]<=n && arr[arr[i]-1] != arr[i]){
            [arr[arr[i]-1], arr[i]] = [arr[i], arr[arr[i] - 1]];
        }
    }
    for(let i=0; i<arr.length; i++){
        if(arr[i] != i+1){
            return i+1;
        }
    }
    return n+1;
}
console.log(MissingNumber(arr));
// Time complexity :- O(n)
// Space complexity :- O(1)

