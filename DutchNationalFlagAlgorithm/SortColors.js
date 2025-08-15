let nums = [2,0,2,1,1,0];   // [0,0,1,1,2,2]

let low =0;
let mid =0;
let high = nums.length-1;  // 5

while(mid<=high){
    if(nums[mid] === 0){
        [nums[low],nums[mid]] = [nums[mid],nums[low]];
        low+=1;
        mid+=1;
    }
    else if(nums[mid] == 1){
        mid+=1;
    }
    else{
        [nums[high],nums[mid]] = [nums[mid],nums[high]];
        high-=1;
    }
}
console.log(nums);
// Time complexity :- O(n)
// Space complexity :- O(1)